import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavTopComponent } from './nav-top/nav-top.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {DealsModule} from './deals/deals.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import * as FileSaver from 'node_modules/angular-file-saver';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    ErrorPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DealsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
