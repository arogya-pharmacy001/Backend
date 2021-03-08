import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.module';

import { RegistrationService } from '../registration.service';

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
  
  ngOnInit() :void {
   
  }
    //this.reg_service.loginFromRemote().subscribe()
   
    register()
    {
      this.router.navigate(["register"]);
    }


      loginUser(userData:any)
      {

        let user=userData.username;
        let pass=userData.password;
        let desig=userData.desg;
        console.log(user+" "+pass);
         
       
        this.customer.cust_login=user;
        this.customer.cust_pass=pass;
    
        this.reg_service.checkLogin(this.customer).subscribe(obj=>{
          if(obj==null)
          {

            console.log("wrong pass / username");
            console.log("customer");
          }
          else{
            if(desig=="customer")
            {
              console.log(obj);
              this.customer1=obj;
              sessionStorage.setItem("customer",JSON.stringify(obj));
              this.router.navigate(["dashboard"]);
            }
            else if(desig=="admin"){
                console.log(obj);
                this.customer1=obj;
                sessionStorage.setItem("customer",JSON.stringify(obj));
                this.router.navigate(["adminDashboard"]);
            }
          }
        })
    
      
    }
   
  

  }


  //dummy login mechanism
  /*
  checkuser(name:any)
  {

    let user=name.username;
    let pass=name.password;
    if(user=="raj"&&pass=="pass")
    {

      this.router.navigate(["home"])
    console.log("sucessfullly login");
    }
    else{
      console.log("failed login")
      this.msg="user name wrong";
    }
  }
*/

