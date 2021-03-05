import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cust=new Customer();
  msg:string="";
  constructor(public router:Router,public reg_service:RegistrationService){ }

  ngOnInit(): void {
  }

  loginUser(){

    this.reg_service.loginUserFromRemote(this.cust).subscribe(
        data=>console.log("response received"),
        error=>console.log("error received")

    )
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
}
