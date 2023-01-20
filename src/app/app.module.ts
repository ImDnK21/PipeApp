import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//. Prime NG
// import {ButtonModule} from 'primeng/button';
// import {Card, CardModule} from 'primeng/card';
//. Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
