import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { environment } from 'environments/environment';
import { AppRoutingModule } from './app.routes';

import { fakeBackendProvider } from './common/fakeBackendInterceptor';

import { AppComponent } from './app.component';
import { AppState, InternalStateType } from './app.service';

import { DashbardComponent } from './dashbard/dashbard.component';
import { CityComponent } from './city/city.component';
import { AppStoreModule } from './shared/app-store/app-store.module';

import '../styles/styles.scss';
import { EquipComponent } from './equip/equip.component';


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DashbardComponent,
    CityComponent,
    EquipComponent,
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    NgxChartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    environment.ENV_PROVIDERS,
    DatePipe,
    DecimalPipe,
    fakeBackendProvider
  ]
})
export class AppModule { }
