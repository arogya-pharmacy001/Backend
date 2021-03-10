import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-by-date-sort',
  templateUrl: './order-by-date-sort.component.html',
  styleUrls: ['./order-by-date-sort.component.css']
})
export class OrderByDateSortComponent implements OnInit {
  orders:Array<Order>=[];
  constructor(public orderSer:OrderServiceService) { }

  ngOnInit() {

    return this.orderSer.displayAllOrdersByDate().subscribe(data=>this.orders=data);
  }

}
