import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SluzbyComponent } from './sluzby/sluzby.component';
import { PoskytovateliaComponent } from './poskytovatelia/poskytovatelia.component';
import { ClenoviaComponent } from './clenovia/clenovia.component';
import { PoskytnutaSluzbaEditorComponent } from './poskytnuta-sluzba-editor/poskytnuta-sluzba-editor.component';
import { PoskytnuteSluzbyComponent } from './poskytnute-sluzby/poskytnute-sluzby.component';
import { SluzbaEditorComponent } from './sluzba-editor/sluzba-editor.component';
import { ClenEditorComponent } from './clen-editor/clen-editor.component';
import { PoskytovatelEditorComponent } from './poskytovatel-editor/poskytovatel-editor.component';
import { FakturovatSluzbuComponent } from './fakturovat-sluzbu/fakturovat-sluzbu.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportManazerComponent } from './report-manazer/report-manazer.component';
import { ReportPoskytovatelComponent } from './report-poskytovatel/report-poskytovatel.component';
import { ReportClenComponent } from './report-clen/report-clen.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ErrorInterceptor } from './http-interceptors/error-interceptor';
import { JwtInterceptor } from './http-interceptors/jwt-interceptor';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SluzbyComponent,
    PoskytovateliaComponent,
    ClenoviaComponent,
    PoskytnutaSluzbaEditorComponent,
    PoskytnuteSluzbyComponent,
    SluzbaEditorComponent,
    ClenEditorComponent,
    PoskytovatelEditorComponent,
    FakturovatSluzbuComponent,
    PageNotFoundComponent,
    ReportManazerComponent,
    ReportPoskytovatelComponent,
    ReportClenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatMomentDateModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
