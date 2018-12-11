import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

import { PoskytnutaSluzba } from '../models/poskytnuta-sluzba';

@Injectable({
  providedIn: 'root'
})

export class PoskytnutaSluzbaService {

  constructor(private http: HttpClient) { }

  getPoskytnutaSluzba(): Observable<any> {

    return this.http.get(`${environment.apiEndpoint}/poskytnutesluzby`);
  }

  addPoskytnutaSluzba(poskytnutaSluzba: PoskytnutaSluzba): Observable<PoskytnutaSluzba> {

    return this.http.post<PoskytnutaSluzba>(`${environment.apiEndpoint}/poskytnutesluzby`, poskytnutaSluzba);
  }

  findPoskytnutaSluzbaById(id: String): Observable<any> {

    const httpOptions = {
      params: new HttpParams().set('id', id.valueOf())
    };

    return this.http.get(`${environment.apiEndpoint}/poskytnutesluzby/findById`, httpOptions);
  }

  deletePoskytnutaSluzba(poskytnutaSluzba: PoskytnutaSluzba | number): Observable<PoskytnutaSluzba> {

    const id = typeof poskytnutaSluzba === 'number' ? poskytnutaSluzba : poskytnutaSluzba.id;

    return this.http.delete<PoskytnutaSluzba>(`${environment.apiEndpoint}/poskytnutesluzby/${id}`);
  }
}
