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

import { RegisterComponent } from './register/register.component';
import { StockComponent } from './stock/stock.component';
//import {MyGuard} from './app.guard';

@NgModule({
  declarations: [
    AppComponent,
    ContatusComponent,
    LoginComponent,
    DashboardComponent,
    DisplayBillComponent,
    RegisterComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    NgbModule,HttpClientModule
  ],
  providers: [],//MyGuard

  bootstrap: [AppComponent]
})
export class AppModule { }
