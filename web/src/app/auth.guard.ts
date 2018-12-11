import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AuthorityEnum } from './models/authority';
import decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentToken = this.authenticationService.currentTokenValue;

        if (currentToken) {
            const tokenPayload = decode(currentToken);
            const expectedAuthorities: AuthorityEnum[] = route.data.expectedAuthority;

            const found = expectedAuthorities.filter((authority: AuthorityEnum) =>
                AuthorityEnum[authority] === tokenPayload.authority[0].authority
            );
            return found.length > 0 ? true : false;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
