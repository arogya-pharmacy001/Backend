import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-display-supplier',
  templateUrl: './display-supplier.component.html',
  styleUrls: ['./display-supplier.component.css']
})
export class DisplaySupplierComponent implements OnInit {

  supplierInfo:Array<Supplier>=[];
  flag:boolean=false;
  constructor(public supplierService:SupplierService) { }

  ngOnInit(): void {
  }

  loadData():any{
    this.flag=true;
    this.supplierService.loadSupplierDetails().subscribe(data=>this.supplierInfo=data);
  }
}
