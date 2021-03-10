import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../customer.module';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
msg:string="";
  constructor(public registerService:CustomerServiceService) { }

  ngOnInit(): void {
  }

  addCustomerComponent(customer:Customer)
  {
    console.log(customer);
    this.registerService.addCustomer(customer).subscribe(data=>this.msg=data)
  }

}
