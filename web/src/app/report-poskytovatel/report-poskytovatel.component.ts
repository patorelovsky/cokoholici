import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { FormBuilder } from '@angular/forms';

import { Poskytovatel } from '../models/poskytovatel';
import { PoskytovatelService } from '../services/poskytovatel.service';
import { AuthenticationService } from '../services/authentication.service';
import { ExcelService } from '../services/excel.service';
import { AuthorityEnum } from '../models/authority';
import decode from 'jwt-decode';

@Component({
  selector: 'app-report-poskytovatel',
  templateUrl: './report-poskytovatel.component.html',
  styleUrls: ['./report-poskytovatel.component.css']
})
export class ReportPoskytovatelComponent implements OnInit {

  private reportPoskytovatelForm = this.fb.group({ kodPoskytovatela: [''] });
  poskytovatelia: Poskytovatel[];
  private selectedPoskytovatel: Poskytovatel;
  private sumPoskytovatel = 0;
  dataSource: any[] = [];
  private columns: any;
  showSearch = true;

  constructor(
    private reportService: ReportService,
    private poskytovatelService: PoskytovatelService,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private excelService: ExcelService
  ) { }

  ngOnInit() {
    this.getPoskytovatelia();
  }

  private getReportPoskytovatelData(): void {
    const kodPoskytovatela = this.reportPoskytovatelForm.controls['kodPoskytovatela'].value;

    this.selectedPoskytovatel = this.poskytovatelia.find(poskytovatel =>
      poskytovatel.kodPoskytovatela === kodPoskytovatela);
    this.showSearch = false;

    this.reportService.getReportPoskytovatel(kodPoskytovatela).subscribe(data => {
      if (data.length) {
        this.dataSource = data;
        this.columns = Object.keys(this.dataSource[0]);
      } else {
        this.dataSource = [];
        this.columns = [];
      }
    });

    this.reportService.getSumPoskytovatel(kodPoskytovatela).subscribe(sum => this.sumPoskytovatel = sum ? sum : 0);
  }

  private goBack() {
    this.showSearch = true;
    this.selectedPoskytovatel = undefined;
  }

  private getPoskytovatelia(): void {
    this.poskytovatelService.getPoskytovatel().subscribe(json => {
      const poskytovatelia = json._embedded.poskytovatelia;

      this.authenticationService.currentToken.subscribe(token => {
        const tokenPayload = decode(token);
        const authority: any = AuthorityEnum[tokenPayload.authority[0].authority];

        switch (authority) {
          case AuthorityEnum.ROLE_MANAZER: {
            this.poskytovatelia = poskytovatelia;
            break;
          }
          case AuthorityEnum.ROLE_OPERATOR: {
            this.poskytovatelia = undefined;
            break;
          }
          case AuthorityEnum.ROLE_POSKYTOVATEL: {
            const myId = tokenPayload.sub;
            this.poskytovatelia = poskytovatelia.filter(poskytovatel => poskytovatel.kodPoskytovatela === myId);
            break;
          }
          default: {
            this.poskytovatelia = undefined;
          }
        }
      });
    });
  }

  exportAsXLSX(): void {
    const retVal: Map<string, any[]> = new Map<string, any[]>();

    const Summary = {
      'Počet': this.dataSource.length,
      'Suma': this.sumPoskytovatel
    };

    retVal.set('poskytovatel', [this.selectedPoskytovatel]);
    retVal.set('data', this.dataSource);
    retVal.set('Summary', [Summary]);

    this.excelService.exportAsExcelFile(retVal,
      `report_poskytovatel_${this.reportPoskytovatelForm.controls['kodPoskytovatela'].value}`
    );
  }
}
