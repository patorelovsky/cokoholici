import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Clen } from '../models/clen';
import { ClenService } from '../services/clen.service';
import { AuthenticationService } from '../services/authentication.service';
import { ExcelService } from '../services/excel.service';
import { AuthorityEnum } from '../models/authority';
import decode from 'jwt-decode';

@Component({
  selector: 'app-clenovia',
  templateUrl: './clenovia.component.html',
  styleUrls: ['./clenovia.component.css']
})
export class ClenoviaComponent implements OnInit {

  constructor(
    private clenService: ClenService,
    private snackBar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationService,
    private excelService: ExcelService
  ) { }

  dataSource: MatTableDataSource<Clen> = new MatTableDataSource<Clen>();
  columnsToDisplay: String[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getClenova();

    this.authenticationService.currentToken.subscribe(token => {
      const tokenPayload = decode(token);
      const authority: any = AuthorityEnum[tokenPayload.authority[0].authority];

      switch (authority) {
        case AuthorityEnum.ROLE_MANAZER: {
          this.columnsToDisplay = [
            'kodClena',
            'menoClena',
            'ulicaAdresyClena',
            'mestoAdresyClena',
            'pscAdresyClena',
            'statusClena'
          ];
          break;
        }
        case AuthorityEnum.ROLE_OPERATOR: {
          this.columnsToDisplay = [
            'kodClena',
            'menoClena',
            'ulicaAdresyClena',
            'mestoAdresyClena',
            'pscAdresyClena',
            'statusClena',
            'upravit',
            'zmazat'
          ];
          break;
        }
        case AuthorityEnum.ROLE_POSKYTOVATEL: {
          this.columnsToDisplay = [
            'kodClena',
            'menoClena',
            'ulicaAdresyClena',
            'mestoAdresyClena',
            'pscAdresyClena',
            'statusClena'
          ];
          break;
        }
        default: {
          this.columnsToDisplay = undefined;
        }
      }
    });
  }

  private getClenova(): void {
    this.clenService.getClen().subscribe(json =>
      this.dataSource.data = json._embedded.clenovia);
  }

  private update(clen: Clen): void {
    this.router.navigate(['clen-editor'], {
      queryParams: {
        'kodClena': clen.kodClena
      }
    });
  }

  private delete(clen: Clen): void {
    this.clenService.deleteClen(clen).subscribe(() =>
      this.getClenova());
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

    retVal.set(`data`, this.dataSource.data);

    this.excelService.exportAsExcelFile(retVal,
      `clenovia`
    );
  }
}

