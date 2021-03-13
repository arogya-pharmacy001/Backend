import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-bynamedesc',
  templateUrl: './stock-bynamedesc.component.html',
  styleUrls: ['./stock-bynamedesc.component.css']
})
export class StockBynamedescComponent implements OnInit {


  stocks:Array<Stock>=[];


  constructor(public stockSer:StockServiceService,public router:Router) { }

  ngOnInit(): void {
  }


  stockByName()
  {
    
    return this.stockSer.loadstockname().subscribe(data=>this.stocks=data);
  }
  onpress(){
    this.router.navigate(["adminDashboard"])  
 
  }
}
