import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../stock-service.service';

@Component({
  selector: 'app-stock-delete',
  templateUrl: './stock-delete.component.html',
  styleUrls: ['./stock-delete.component.css']
})
export class StockDeleteComponent implements OnInit {

  
  constructor(public productSer:StockServiceService) { }
  
  msg:string="";

  ngOnInit(): void {
  }

  deleteProduct(id:any){
    
    this.productSer.deleteStock(id).subscribe(result=>this.msg=result);
  }

}
