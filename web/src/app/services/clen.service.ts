import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Clen } from '../models/clen';

@Injectable({
  providedIn: 'root'
})
export class ClenService {

  constructor(private http: HttpClient) { }

  getClen(): Observable<any> {

    return this.http.get(`${environment.apiEndpoint}/clenovia`);
  }

  findClenById(id: String): Observable<any> {

    const httpOptions = {
      params: new HttpParams().set('id', id.valueOf())
    };

    return this.http.get(`${environment.apiEndpoint}/clenovia/findById`, httpOptions);
  }

  getStatusClen(id: String): Observable<any> {

    const httpOptions = {
      params: new HttpParams().set('id', id.valueOf())
    };

    return this.http.get(`${environment.apiEndpoint}/clenovia/getStatus`, httpOptions);
  }

  addClen(clen: Clen): Observable<Clen> {

    return this.http.post<Clen>(`${environment.apiEndpoint}/clenovia`, clen);
  }

  deleteClen(clen: Clen | number): Observable<Clen> {

    const id = typeof clen === 'number' ? clen : clen.kodClena;
    const url = `${environment.apiEndpoint}/clenovia/${id}`;

    return this.http.delete<Clen>(url);
  }
}
