import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Sluzba } from '../models/sluzba';

@Injectable({
  providedIn: 'root'
})
export class SluzbaService {

  constructor(private http: HttpClient) { }

  getSluzba(): Observable<any> {

    return this.http.get(`${environment.apiEndpoint}/sluzby`);
  }

  findSluzbaById(id: String): Observable<any> {

    const httpOptions = {
      params: new HttpParams().set('id', id.valueOf())
    };

    return this.http.get(`${environment.apiEndpoint}/sluzby/findById`, httpOptions);
  }

  addSluzba(sluzba: Sluzba): Observable<Sluzba> {

    return this.http.post<Sluzba>(`${environment.apiEndpoint}/sluzby`, sluzba);
  }

  deleteSluzba(sluzba: Sluzba | number): Observable<Sluzba> {

    const id = typeof sluzba === 'number' ? sluzba : sluzba.kodSluzby;

    return this.http.delete<Sluzba>(`${environment.apiEndpoint}/sluzby/${id}`);
  }
}


