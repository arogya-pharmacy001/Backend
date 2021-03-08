import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  msg:string=""
  supplierInfo = new FormGroup({
    item_name:new FormControl(),
    expiry:new FormControl(),
    quantity:new FormControl(),
    price:new FormControl(),
    type:new FormControl(),
    delivery_date:new FormControl()
  })
  constructor(public supplierService:SupplierService) { }

  ngOnInit(): void {
  }

  storeSupplierDetails() {
    let supplierRef = this.supplierInfo.value;
    this.supplierService.storeSupplierInfo(supplierRef).subscribe(result=>this.msg=result);
  }

}
