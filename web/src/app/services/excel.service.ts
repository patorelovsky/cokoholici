import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() { }

  public exportAsExcelFile(sheets: Map<string, any[]>, excelFileName: string): void {

    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    sheets.forEach((worksheet: any[], sheetName: string) =>
      XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(worksheet), sheetName)
    );

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    const d = new Date();
    const now = `${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`;

    FileSaver.saveAs(data, `${fileName}_${now}${EXCEL_EXTENSION}`);
  }
}
