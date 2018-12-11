import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild, OnInit, DoCheck } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { MatSidenav } from '@angular/material';
import { AuthorityEnum } from './models/authority';
import decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, DoCheck {
  title = 'Čokoholici';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  isManazer = undefined;
  isPoskytovatel = undefined;
  isOperator = undefined;
  lastName: String = undefined;
  authority: String = undefined;
  oldToken: String = undefined;

  @ViewChild('snav') public sidenav: MatSidenav;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.authentificate();
  }

  ngDoCheck() {
    if (this.authenticationService.currentTokenValue !== this.oldToken && this.authenticationService.currentTokenValue) {
      this.authentificate();
    }
  }

  authentificate() {
    this.authenticationService.currentToken.subscribe(token => {
      this.oldToken = token;
      const tokenPayload = decode(token);
      const authority: any = AuthorityEnum[tokenPayload.authority[0].authority];
      this.authority = AuthorityEnum[authority];

      switch (authority) {
        case AuthorityEnum.ROLE_MANAZER: {
          this.isManazer = true;
          this.isPoskytovatel = false;
          this.isOperator = false;
          break;
        }
        case AuthorityEnum.ROLE_OPERATOR: {
          this.isManazer = false;
          this.isPoskytovatel = false;
          this.isOperator = true;
          break;
        }
        case AuthorityEnum.ROLE_POSKYTOVATEL: {
          this.isManazer = false;
          this.isPoskytovatel = true;
          this.isOperator = false;
          break;
        }
        default: {
          this.isManazer = undefined;
          this.isPoskytovatel = undefined;
          this.isOperator = undefined;
        }
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    this.sidenav.close();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
