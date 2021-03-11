import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order.model';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css']
})
export class OrderDisplayComponent implements OnInit {

  orders:Array<Order>=[];
  constructor(public orderSer:OrderServiceService,public router:Router) { }

  ngOnInit() {

    return this.orderSer.displayOrders().subscribe(data=>this.orders=data);
  }



}
