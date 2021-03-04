import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill.model';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-display-bill',
  templateUrl: './display-bill.component.html',
  styleUrls: ['./display-bill.component.css']
})
export class DisplayBillComponent implements OnInit {

  billInfo:Array<Bill>=[];
  constructor(public billService:BillService,public router:Router) { }

  ngOnInit(): void {
    this.billService.loadBillDetails().subscribe(data=>this.billInfo=data);
  }

}
