import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
//. Prime NG
// import {ButtonModule} from 'primeng/button';
// import {Card, CardModule} from 'primeng/card';
//. Modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//. Cambiar el locale de la app
import localeEs from "@angular/common/locales/es-HN";
import localeFr from "@angular/common/locales/fr";
import {registerLocaleData} from '@angular/common'
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    VentasModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-HN'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
