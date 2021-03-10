import { Component, OnInit } from '@angular/core';

import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-byname',
  templateUrl: './stock-byname.component.html',
  styleUrls: ['./stock-byname.component.css']
})
export class StockBynameComponent implements OnInit {
 
  stocks:Array<Stock>=[];
  sid1:number=0;

  constructor(public stockSer:StockServiceService) { }

  ngOnInit(): void {
  }

  stockByName()
  {
    
    return this.stockSer.loadstockname().subscribe(data=>this.stocks=data);
  }

}





