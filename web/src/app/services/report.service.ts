import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReportManazer(): Observable<any> {

    return this.http.get(`${environment.apiEndpoint}/reporty/manazer`);
  }

  getReportPoskytovatel(id: String): Observable<any> {

    const httpOptions = {
      params: new HttpParams().set('id', id.valueOf())
    };

    return this.http.get(`${environment.apiEndpoint}/reporty/poskytovatel`, httpOptions);
  }

  getSumPoskytovatel(id: String): Observable<any> {

    const httpOptions = {
      params: new HttpParams().set('id', id.valueOf())
    };

    return this.http.get(`${environment.apiEndpoint}/reporty/sumPoskytovatel`, httpOptions);
  }

  getReportClen(id: String): Observable<any> {

    const httpOptions = {
      params: new HttpParams().set('id', id.valueOf())
    };

    return this.http.get(`${environment.apiEndpoint}/reporty/clen`, httpOptions);
  }
}
