import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Sluzba } from '../models/sluzba';
import { SluzbaService } from '../services/sluzba.service';
import { AuthenticationService } from '../services/authentication.service';
import { ExcelService } from '../services/excel.service';
import { AuthorityEnum, Authority } from '../models/authority';
import decode from 'jwt-decode';

@Component({
  selector: 'app-sluzby',
  templateUrl: './sluzby.component.html',
  styleUrls: ['./sluzby.component.css']
})

export class SluzbyComponent implements OnInit {

  dataSource: MatTableDataSource<Sluzba> = new MatTableDataSource<Sluzba>();
  columnsToDisplay: String[];

  constructor(
    private sluzbaService: SluzbaService,
    private snackBar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationService,
    private excelService: ExcelService
  ) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getSluzby();

    this.authenticationService.currentToken.subscribe(token => {
      const tokenPayload: any = decode(token);
      const authority: any = AuthorityEnum[tokenPayload.authority[0].authority];

      switch (authority) {
        case AuthorityEnum.ROLE_MANAZER: {
          this.columnsToDisplay = [
            'kodSluzby',
            'nazovSluzby',
            'poplatokZaSluzbu',
          ];
          break;
        }
        case AuthorityEnum.ROLE_OPERATOR: {
          this.columnsToDisplay = [
            'kodSluzby',
            'nazovSluzby',
            'poplatokZaSluzbu',
            'upravit',
            'zmazat'
          ];
          break;
        }
        case AuthorityEnum.ROLE_POSKYTOVATEL: {
          this.columnsToDisplay = [
            'kodSluzby',
            'nazovSluzby',
            'poplatokZaSluzbu',
          ];
          break;
        }
        default: {
          this.columnsToDisplay = undefined;
        }
      }
    }
    );
  }

  private getSluzby(): void {
    this.sluzbaService.getSluzba().subscribe(json =>
      this.dataSource.data = json._embedded.sluzby);
  }

  private update(sluzba: Sluzba): void {
    this.router.navigate(['sluzba-editor'], {
      queryParams: {
        'kodSluzby': sluzba.kodSluzby
      }
    });
  }

  private delete(sluzba: Sluzba): void {
    this.sluzbaService.deleteSluzba(sluzba).subscribe(() =>
      this.getSluzby);
    this.openSnackBar('Zmazané', 'OK');
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  exportAsXLSX(): void {
    const retVal: Map<string, any[]> = new Map<string, any[]>();

    retVal.set('data', this.dataSource.data);

    this.excelService.exportAsExcelFile(retVal,
      `sluzby`
    );
  }
}
