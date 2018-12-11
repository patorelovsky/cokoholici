import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { ExcelService } from '../services/excel.service';

@Component({
  selector: 'app-report-manazer',
  templateUrl: './report-manazer.component.html',
  styleUrls: ['./report-manazer.component.css']
})
export class ReportManazerComponent implements OnInit {

  dataSource: any;
  columns: any;

  constructor(
    private reportService: ReportService,
    private excelService: ExcelService
  ) { }

  ngOnInit() {
    this.getReportManazerData();
  }

  getReportManazerData(): void {
    this.reportService.getReportManazer().subscribe(data => {
      if (data.length) {
        this.dataSource = data;
        this.columns = Object.keys(this.dataSource[0]);
      } else {
        this.dataSource = [];
        this.columns = [];
      }
    });
  }

  exportAsXLSX(): void {
    const retVal: Map<string, any[]> = new Map<string, any[]>();

    retVal.set('data', this.dataSource);

    this.excelService.exportAsExcelFile(retVal,
      'report_manazer'
    );
  }
}
