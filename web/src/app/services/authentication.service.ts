import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentTokenSubject: BehaviorSubject<String>;
  public currentToken: Observable<String>;

  constructor(private http: HttpClient, private userService: UserService) {
    this.currentTokenSubject = new BehaviorSubject<String>(localStorage.getItem('token'));
    this.currentToken = this.currentTokenSubject.asObservable();
  }

  public get currentTokenValue(): String {
    return this.currentTokenSubject.value;
  }

  login(username: string, password: string) {

    return this.http.post<any>(`${environment.apiEndpoint}/auth`, { username, password })
      .pipe(map(json => {
        if (json) {
          localStorage.setItem('token', json.token);
          this.currentTokenSubject.next(json.token);
          return json.token;
        }
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this.currentTokenSubject.next(null);
  }
}
