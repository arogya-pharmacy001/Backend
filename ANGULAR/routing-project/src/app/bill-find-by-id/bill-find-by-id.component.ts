import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill.model';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-find-by-id',
  templateUrl: './bill-find-by-id.component.html',
  styleUrls: ['./bill-find-by-id.component.css']
})
export class BillFindByIdComponent implements OnInit {

  billRef = new Bill();
  bill_id : number=0;
  msg:string=""
  flag:boolean=false;
  constructor(public billService : BillService) { }

  ngOnInit(): void {
  }

  callService() {
    //console.log("Event fired "+this.pid)
    this.billService.findBillById(this.bill_id).subscribe(data=> {
      if(data==null){
      this.msg = "Record not found";
      this.flag = false;
    
      }else {
        this.msg = "";
        this.flag = true;
        this.billRef=data;        
      }
    })
  }

}
