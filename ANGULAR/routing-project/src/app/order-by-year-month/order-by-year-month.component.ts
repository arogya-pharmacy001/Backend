import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-by-year-month',
  templateUrl: './order-by-year-month.component.html',
  styleUrls: ['./order-by-year-month.component.css']
})
export class OrderByYearMonthComponent implements OnInit {
  orders:Array<Order>=[];

oid1:number=0;
oid2:number=0;

  constructor(public orderSer:OrderServiceService) { }

  ngOnInit(): void {

 }

orderbyyearmonth(year:any,month:any)
{
  year=this.oid1;
  month=this.oid2;

  return this.orderSer.displayByYearMonth(year,month).subscribe(data=>this.orders=data);

}

}
