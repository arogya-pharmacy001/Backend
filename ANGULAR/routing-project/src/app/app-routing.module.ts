import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatusComponent } from './contatus/contatus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:"\login",component:LoginComponent},
{path:"\aboutus",component:ContatusComponent},
{path:"",redirectTo:"\login",pathMatch:"prefix"},
{path:"\home",component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
