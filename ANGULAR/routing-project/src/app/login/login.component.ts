import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
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

}
