import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatusComponent } from './contatus/contatus.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DisplayBillComponent } from './display-bill/display-bill.component';
import { HttpClientModule } from '@angular/common/http';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatusComponent,
    LoginComponent,
    DashboardComponent,
    DisplayBillComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    NgbModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
