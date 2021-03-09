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
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { StockDeleteComponent } from './stock-delete/stock-delete.component';
import { StockInsertComponent } from './stock-insert/stock-insert.component';
import { TestComponettComponent } from './test-componett/test-componett.component';

//import {MyGuard} from './app.guard';

import { StoreBillComponent } from './store-bill/store-bill.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { DeleteBillComponent } from './delete-bill/delete-bill.component';
import { BillFindByIdComponent } from './bill-find-by-id/bill-find-by-id.component';
import { DisplaySupplierComponent } from './display-supplier/display-supplier.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { TallySupplierComponent } from './tally-supplier/tally-supplier.component';



@NgModule({
  declarations: [
    AppComponent,
    ContatusComponent,
    LoginComponent,
    DashboardComponent,
    DisplayBillComponent,
 
    StockComponent,
    StockUpdateComponent,
    StockDeleteComponent,

    StockInsertComponent,
    TestComponettComponent

    StockInsertComponent

    RegisterComponent,
    StockComponent,
    StoreBillComponent,
    UpdateBillComponent,
    DeleteBillComponent,
    BillFindByIdComponent,
    DisplaySupplierComponent,
    AddSupplierComponent,
    TallySupplierComponent


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
