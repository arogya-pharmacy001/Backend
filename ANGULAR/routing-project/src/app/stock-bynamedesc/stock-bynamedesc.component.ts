import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-bynamedesc',
  templateUrl: './stock-bynamedesc.component.html',
  styleUrls: ['./stock-bynamedesc.component.css']
})
export class StockBynamedescComponent implements OnInit {


  stocks:Array<Stock>=[];


  constructor(public stockSer:StockServiceService) { }

  ngOnInit(): void {
  }


  stockByName()
  {
    
    return this.stockSer.loadstockname().subscribe(data=>this.stocks=data);
  }

}
