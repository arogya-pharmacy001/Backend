import { NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BillFindByIdComponent } from './bill-find-by-id/bill-find-by-id.component';
import { ContatusComponent } from './contatus/contatus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteBillComponent } from './delete-bill/delete-bill.component';
import { DisplayBillComponent } from './display-bill/display-bill.component';
import { DisplaySupplierComponent } from './display-supplier/display-supplier.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoreBillComponent } from './store-bill/store-bill.component';
import { TestComponettComponent } from './test-componett/test-componett.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
{path:"\login",component:LoginComponent},
{path:"\aboutus",component:ContatusComponent},
{path:"\home",component:DashboardComponent},
{path:"",component:LandingPageComponent},
{path:"\landing",component:LandingPageComponent},
{path:"\dashboard",component:DashboardComponent},
{path:"\adminDashboard",component:AdminDashboardComponent},
{path:"test",component:TestComponettComponent},
{path:"\supplier",component:DisplaySupplierComponent},
{path:"\displaybills",component:DisplayBillComponent},
{path:"\storebills",component:StoreBillComponent},
{path:"\alterbills",component:UpdateBillComponent},
{path:"\deletebills",component:DeleteBillComponent},
{path:"\findbills",component:BillFindByIdComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
