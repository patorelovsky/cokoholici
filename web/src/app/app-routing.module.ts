import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

import { SluzbyComponent } from './sluzby/sluzby.component';
import { PoskytovateliaComponent } from './poskytovatelia/poskytovatelia.component';
import { ClenoviaComponent } from './clenovia/clenovia.component';
import { PoskytnuteSluzbyComponent } from './poskytnute-sluzby/poskytnute-sluzby.component';

import { SluzbaEditorComponent } from './sluzba-editor/sluzba-editor.component';
import { PoskytovatelEditorComponent } from './poskytovatel-editor/poskytovatel-editor.component';
import { ClenEditorComponent } from './clen-editor/clen-editor.component';
import { PoskytnutaSluzbaEditorComponent } from './poskytnuta-sluzba-editor/poskytnuta-sluzba-editor.component';

import { FakturovatSluzbuComponent } from './fakturovat-sluzbu/fakturovat-sluzbu.component';

import { ReportManazerComponent } from './report-manazer/report-manazer.component';
import { ReportPoskytovatelComponent } from './report-poskytovatel/report-poskytovatel.component';
import { ReportClenComponent } from './report-clen/report-clen.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorityEnum } from './models/authority';

const routes: Routes = [
  {
    path: '',
    component: SluzbyComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_POSKYTOVATEL, AuthorityEnum.ROLE_OPERATOR, AuthorityEnum.ROLE_MANAZER]
    }
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'sluzby',
    component: SluzbyComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_POSKYTOVATEL, AuthorityEnum.ROLE_OPERATOR, AuthorityEnum.ROLE_MANAZER]
    }
  },
  {
    path: 'poskytovatelia',
    component: PoskytovateliaComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_MANAZER, AuthorityEnum.ROLE_OPERATOR]
    }
  },
  {
    path: 'clenovia',
    component: ClenoviaComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_MANAZER, AuthorityEnum.ROLE_OPERATOR]
    }
  },
  {
    path: 'poskytnute-sluzby',
    component: PoskytnuteSluzbyComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_MANAZER, AuthorityEnum.ROLE_OPERATOR]
    }
  },
  {
    path: 'poskytovatel-editor',
    component: PoskytovatelEditorComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_OPERATOR]
    }
  },
  {
    path: 'clen-editor',
    component: ClenEditorComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_OPERATOR]
    }
  },
  {
    path: 'sluzba-editor',
    component: SluzbaEditorComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_OPERATOR]
    }
  },
  {
    path: 'poskytnuta-sluzba-editor',
    component: PoskytnutaSluzbaEditorComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_OPERATOR]
    }
  },
  {
    path: 'fakturovat-sluzbu',
    component: FakturovatSluzbuComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_POSKYTOVATEL]
    }
  },
  {
    path: 'report-manazer',
    component: ReportManazerComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_MANAZER]
    }
  },
  {
    path: 'report-poskytovatel',
    component: ReportPoskytovatelComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_MANAZER, AuthorityEnum.ROLE_POSKYTOVATEL]
    }
  },
  {
    path: 'report-clen',
    component: ReportClenComponent,
    canActivate: [AuthGuard],
    data: {
      expectedAuthority: [AuthorityEnum.ROLE_MANAZER]
    }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
