import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})
export class DisplayCustomerComponent implements OnInit {

  customerInfo:Array<Customer>=[];
  flag:boolean = false;
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
  }

  loadData(){
    this.flag=true;
    this.customerService.loadCustomerDetails().subscribe(data=>this.customerInfo=data);
  }

}
