import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Poskytovatel } from '../models/poskytovatel';
import { PoskytovatelService } from '../services/poskytovatel.service';
import { ExcelService } from '../services/excel.service';
import { AuthorityEnum } from '../models/authority';
import { AuthenticationService } from '../services/authentication.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-poskytovatelia',
  templateUrl: './poskytovatelia.component.html',
  styleUrls: ['./poskytovatelia.component.css']
})
export class PoskytovateliaComponent implements OnInit {

  dataSource: MatTableDataSource<Poskytovatel> = new MatTableDataSource<Poskytovatel>();
  columnsToDisplay: String[];

  constructor(
    private poskytovatelService: PoskytovatelService,
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
    this.getPoskytovatelia();

    this.authenticationService.currentToken.subscribe(token => {
      const tokenPayload = decode(token);
      const authority: any = AuthorityEnum[tokenPayload.authority[0].authority];

      switch (authority) {
        case AuthorityEnum.ROLE_MANAZER: {
          this.columnsToDisplay = [
            'kodPoskytovatela',
            'menoPoskytovatela',
            'ulicaAdresyPoskytovatela',
            'mestoAdresyPoskytovatela',
            'pscAdresyPoskytovatela'
          ];
          break;
        }
        case AuthorityEnum.ROLE_OPERATOR: {
          this.columnsToDisplay = [
            'kodPoskytovatela',
            'menoPoskytovatela',
            'ulicaAdresyPoskytovatela',
            'mestoAdresyPoskytovatela',
            'pscAdresyPoskytovatela',
            'upravit',
            'zmazat'
          ];
          break;
        }
        case AuthorityEnum.ROLE_POSKYTOVATEL: {
          this.columnsToDisplay = [
            'kodPoskytovatela',
            'menoPoskytovatela',
            'ulicaAdresyPoskytovatela',
            'mestoAdresyPoskytovatela',
            'pscAdresyPoskytovatela'
          ];
          break;
        }
        default: {
          this.columnsToDisplay = undefined;
        }
      }
    });
  }

  private getPoskytovatelia(): void {
    this.poskytovatelService.getPoskytovatel().subscribe(json =>
      this.dataSource.data = json._embedded.poskytovatelia);
  }

  private update(poskytovatel: Poskytovatel): void {
    this.router.navigate(['poskytovatel-editor'], {
      queryParams: {
        'kodPoskytovatela': poskytovatel.kodPoskytovatela
      }
    });
  }

  private delete(poskytovatel: Poskytovatel): void {
    this.poskytovatelService.deletePoskytovatel(poskytovatel).subscribe(() =>
      this.getPoskytovatelia());
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
      `poskytovatelia`
    );
  }
}
