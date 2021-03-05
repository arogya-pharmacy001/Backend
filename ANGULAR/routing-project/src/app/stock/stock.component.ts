import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock.model';
import { stockservice } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {

  stockinfo:Array<Stock>=[];
  constructor(public stockser:stockservice) { }

  ngOnInit() {
  return this.stockser.loadstock().subscribe(data=>this.stockinfo=data);

  }

}
