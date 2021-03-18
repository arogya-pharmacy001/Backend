import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.module';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
// import { $ } from 'protractor';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";
  customer = new Customer();
  customer1=new Customer();
  constructor(public router:Router,public reg_service:RegistrationService){ }
  
onclickregister(){
  this.router.navigate(['register'])
}

onClickHome(){
  this.router.navigate([""])
}

 

  ngOnInit() :void {
   
  }
    //this.reg_service.loginFromRemote().subscribe()
   
    register()
    {
      this.router.navigate(["register"]);
    }


      loginUser(userData:any)
      {

        let user=userData.cust_login;
        console.log("cu login", user);
        let pass=userData.pass;
        let desig=userData.desg;
        console.log(user+" "+pass);
 
        this.customer.cust_login=user;
        this.customer.pass=pass;
    
        this.reg_service.checkLogin(this.customer).subscribe(obj=>{
          if(obj==null)
          {
            console.log("wrong pass / username");
            console.log("customer");
            $("#errorMessage3").show();
            $("#errorMessage1").hide();
            $("#errorMessage2").hide();
            
          }
          else if (user=='' && pass=='' && desig=='')
          {  
            $("#errorMessage1").show();
            $("#errorMessage2").hide();
            $("#errorMessage3").hide();
          }
         
          else{
            if(desig=="customer" && user=='' && pass=='' )
            {
              $("#errorMessage1").show();
            $("#errorMessage2").hide();
            $("#errorMessage3").hide();
            }
            else if(desig=="customer" && user!='' && pass!='' )
            {
              $("#errorMessag2").show();
              $("#errorMessage1").hide();
              $("#errorMessage3").hide();
              console.log(obj);
              this.customer1=obj;
              sessionStorage.setItem("customer",JSON.stringify(obj));
              this.router.navigate(["dashboard"]);
            }
          
            else 
            if(desig=="admin" && user=='' && pass=='' )
            {
              $("#errorMessag1").show();
              $("#errorMessage2").hide();
              $("#errorMessage3").hide();
            }
            else if(desig=="admin" && user!='' && pass!='' )
            {
              $("#errorMessag2").show();
              $("#errorMessage1").hide();
              $("#errorMessage3").hide();
                console.log(obj);
                this.customer1=obj;
                sessionStorage.setItem("customer",JSON.stringify(obj));
                this.router.navigate(["adminDashboard"]);
              }
          }
        })
      }

       
}

  

