import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-store-bill',
  templateUrl: './store-bill.component.html',
  styleUrls: ['./store-bill.component.css']
})
export class StoreBillComponent implements OnInit {

  msg:string="";
  billInfo = new FormGroup({
  bill_id : new FormControl(),
	item_name : new FormControl(),
	amount : new FormControl(),
	quantity : new FormControl(),
	cust_id : new FormControl()
  })
  constructor(public billService : BillService) { }

  ngOnInit(): void {
  }

  storeBillDetails(){
    let billRef = this.billInfo.value;
    this.billService.storeBillInfo(billRef).subscribe(result=>this.msg=result);
  }

}
