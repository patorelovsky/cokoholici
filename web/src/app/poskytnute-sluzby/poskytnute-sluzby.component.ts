import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { PoskytnutaSluzba } from '../models/poskytnuta-sluzba';
import { PoskytnutaSluzbaService } from '../services/poskytnuta-sluzba.service';
import { ExcelService } from '../services/excel.service';
import { AuthenticationService } from '../services/authentication.service';
import { AuthorityEnum } from '../models/authority';
import decode from 'jwt-decode';

@Component({
  selector: 'app-poskytnute-sluzby',
  templateUrl: './poskytnute-sluzby.component.html',
  styleUrls: ['./poskytnute-sluzby.component.css']
})
export class PoskytnuteSluzbyComponent implements OnInit {

  dataSource: MatTableDataSource<PoskytnutaSluzba> = new MatTableDataSource<PoskytnutaSluzba>();
  columnsToDisplay: String[];

  constructor(
    private poskytnutaSluzbaService: PoskytnutaSluzbaService,
    private snackBar: MatSnackBar,
    private router: Router,
    private excelService: ExcelService,
    private authenticationService: AuthenticationService
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getPoskytnutaSluzba();

    this.authenticationService.currentToken.subscribe(token => {
      const tokenPayload = decode(token);
      const authority: any = AuthorityEnum[tokenPayload.authority[0].authority];

      switch (authority) {
        case AuthorityEnum.ROLE_MANAZER: {
          this.columnsToDisplay = [
            'aktualnyDatum',
            'datumPoskytnutia',
            'kodPoskytovatela',
            'kodClena',
            'kodSluzby',
            'komentar'
          ];
          break;
        }
        case AuthorityEnum.ROLE_OPERATOR: {
          this.columnsToDisplay = [
            'aktualnyDatum',
            'datumPoskytnutia',
            'kodPoskytovatela',
            'kodClena',
            'kodSluzby',
            'komentar',
            'upravit',
            'zmazat'
          ];
          break;
        }
        case AuthorityEnum.ROLE_POSKYTOVATEL: {
          this.columnsToDisplay = [
            'aktualnyDatum',
            'datumPoskytnutia',
            'kodPoskytovatela',
            'kodClena',
            'kodSluzby',
            'komentar'
          ];
          break;
        }
        default: {
          this.columnsToDisplay = undefined;
        }
      }
    });
  }

  private getPoskytnutaSluzba(): void {
    this.poskytnutaSluzbaService.getPoskytnutaSluzba().subscribe(json =>
      this.dataSource.data = json._embedded.poskytnutesluzby);
  }

  private update(poskytnutaSluzba: PoskytnutaSluzba): void {
    this.router.navigate(['poskytnuta-sluzba-editor'], {
      queryParams: {
        'id': poskytnutaSluzba.id
      }
    });
  }

  private delete(poskytnutaSluzba: PoskytnutaSluzba): void {
    this.poskytnutaSluzbaService.deletePoskytnutaSluzba(poskytnutaSluzba).subscribe(() =>
      this.getPoskytnutaSluzba());
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
      `poskytnute_sluzby`
    );
  }
}
