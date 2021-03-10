import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})
export class OrderDeleteComponent implements OnInit {

  msg:string="";

  constructor(public orderSer:OrderServiceService) { }

  ngOnInit(): void {
  }


  deleteProduct(id:any)
  {
      return this.orderSer.deleteOrders(id).subscribe(data=>this.msg=data);
  }

}
