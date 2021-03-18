import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../customer.module';
import { RegistrationService } from '../registration.service';
import * as $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
msg:string="";
  constructor(public registerService:CustomerServiceService,public router:Router) { }

  ngOnInit(): void {
  }

  addCustomerComponent(customer:Customer)
  {
    console.log(customer.cust_name);
    this.registerService.addCustomer(customer).subscribe(data=>this.msg=data)
    this.router.navigate(["login"])

    //  let cname = customer.cust_name;
    //  let caddr=customer.cust_addr;
    //  let cphone=customer.cust_phone;
    //  let cust_login=customer.cust_login;
    //  let cpass=customer.pass;
    //  let errorArray = [];


    //  console.log("cname", cname);
    //  console.log("caddr", caddr);

    //  if (cname=='') 
    //  {
    //   $(".invalid-feedback1").show();
    //  }
    //  else  if (cust_login=='') 
    //  {
    //   $(".invalid-feedback2").show();
    //  }
    //  else  if ( cpass=='') 
    //  {
    //   $(".invalid-feedback3").show();
    //  }
    //  else if (cust_login!='' && caddr!='' && cust_login!='' && cpass!='')
    //  {
    //   this.router.navigate(["login"]);
    //  }
  }
  

  onpress(){

    this.router.navigate(["login"])
  }

  onClickHome(){
    this.router.navigate([""]);
  }

}
