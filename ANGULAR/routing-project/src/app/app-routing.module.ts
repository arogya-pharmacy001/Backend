import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContatusComponent } from './contatus/contatus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayBillComponent } from './display-bill/display-bill.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
{path:"\login",component:LoginComponent},
{path:"\aboutus",component:ContatusComponent},
{path:"\home",component:DashboardComponent},
{path:"\bills",component:DisplayBillComponent},
{path:"",component:LandingPageComponent},
{path:"\landing",component:LandingPageComponent},
{path:"\dashboard",component:DashboardComponent},
{path:"\adminDashboard",component:AdminDashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
