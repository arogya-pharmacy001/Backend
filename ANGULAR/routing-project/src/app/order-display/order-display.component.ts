import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css']
})
export class OrderDisplayComponent implements OnInit {

  orders:Array<Order>=[];
  constructor(public orderSer:OrderServiceService) { }

  ngOnInit() {

    return this.orderSer.displayOrders().subscribe(data=>this.orders=data);
  }



}
