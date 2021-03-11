import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-by-quantity',
  templateUrl: './order-by-quantity.component.html',
  styleUrls: ['./order-by-quantity.component.css']
})
export class OrderByQuantityComponent implements OnInit {

  orders:Array<Order>=[];
  constructor(public orderSer:OrderServiceService) { }

  public obj = new Order();

  ngOnInit() {

    return this.orderSer.displayByQuantity().subscribe(data=>this.orders=data);
  }

}
