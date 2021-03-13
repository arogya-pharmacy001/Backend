import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill.model';
import { BillService } from '../bill.service';
import { Customer } from '../customer.module';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {
customer =new Customer;
billinfo:Array<Bill>=[];
  constructor(public billService : BillService,public router:Router) { }

  ngOnInit(): void {

    let customer1=sessionStorage.getItem("customer");
    if(customer1!=null)
    {
      this.customer=JSON.parse(customer1);


    }

    this.billService.findBillbyCustId(this.customer.cust_id).subscribe(data=>this.billinfo=data);




  }


  

}
