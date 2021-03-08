import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock.model';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {

  stockinfo:Array<Stock>=[];
  constructor(public stockser:StockServiceService) { }

  ngOnInit() {
  return this.stockser.loadstock().subscribe(data=>this.stockinfo=data);

  }

}
