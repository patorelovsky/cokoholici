import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Poskytovatel } from '../models/poskytovatel';

@Injectable({
  providedIn: 'root'
})
export class PoskytovatelService {

  constructor(private http: HttpClient) { }

  getPoskytovatel(): Observable<any> {

    return this.http.get(`${environment.apiEndpoint}/poskytovatelia`);
  }

  findPoskytovatelById(id: String): Observable<any> {

    const httpOptions = {
      params: new HttpParams().set('id', id.valueOf())
    };

    return this.http.get(`${environment.apiEndpoint}/poskytovatelia/findById`, httpOptions);
  }

  existsByIdPoskytovatel(id: String): Observable<any> {

    const httpOptions = {
      params: new HttpParams().set('id', id.valueOf())
    };

    return this.http.get(`${environment.apiEndpoint}/poskytovatelia/existsById`, httpOptions);
  }

  addPoskytovatel(poskytovatel: Poskytovatel): Observable<Poskytovatel> {

    return this.http.post<Poskytovatel>(`${environment.apiEndpoint}/poskytovatelia`, poskytovatel);
  }

  deletePoskytovatel(poskytovatel: Poskytovatel | number): Observable<Poskytovatel> {

    const id = typeof poskytovatel === 'number' ? poskytovatel : poskytovatel.kodPoskytovatela;

    return this.http.delete<Poskytovatel>(`${environment.apiEndpoint}/poskytovatelia/${id}`);
  }

}
