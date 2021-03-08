import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit {

  msg:string=""
  constructor(public billService : BillService) { }

  ngOnInit(): void {
  }

  updateBillInfo(billInfo:any){
    this.billService.updateBillInfo(billInfo).subscribe(data=>this.msg=data);
  }

}
