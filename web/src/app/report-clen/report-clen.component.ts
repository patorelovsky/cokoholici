import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { FormBuilder } from '@angular/forms';

import { Clen } from '../models/clen';
import { ClenService } from '../services/clen.service';
import { ExcelService } from '../services/excel.service';

@Component({
  selector: 'app-report-clen',
  templateUrl: './report-clen.component.html',
  styleUrls: ['./report-clen.component.css']
})
export class ReportClenComponent implements OnInit {

  private reportClenForm = this.fb.group({ kodClena: [''] });
  clenovia: Clen[];
  private selectedClen: Clen;
  dataSource: any;
  private columns: any;
  showSearch = true;

  constructor(
    private reportService: ReportService,
    private clenService: ClenService,
    private fb: FormBuilder,
    private excelService: ExcelService
  ) { }

  ngOnInit() {
    this.getClenovia();
  }

  private getReportClenData(): void {
    this.selectedClen = this.clenovia.find(clen =>
      clen.kodClena === this.reportClenForm.controls['kodClena'].value);
    this.showSearch = false;

    this.reportService.getReportClen(this.reportClenForm.controls['kodClena'].value).subscribe(data => {
      if (data.length) {
        this.dataSource = data;
        this.columns = Object.keys(this.dataSource[0]);
      } else {
        this.dataSource = [];
        this.columns = [];
      }
    });
  }

  private goBack() {
    this.showSearch = true;
    this.selectedClen = undefined;
  }

  private getClenovia(): void {
    this.clenService.getClen().subscribe(json =>
      this.clenovia = json._embedded.clenovia);
  }

  exportAsXLSX(): void {
    const retVal: Map<string, any[]> = new Map<string, any[]>();

    retVal.set('clen', [this.selectedClen]);
    retVal.set(`data`, this.dataSource);

    this.excelService.exportAsExcelFile(retVal,
      `report_clen_${this.reportClenForm.controls['kodClena'].value}`
    );
  }
}
