import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../customer.module';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  customer=new Customer;

  constructor(public router:Router,public CustService:CustomerServiceService) { }

  ngOnInit(): void {
  }

  logout()
  {
    sessionStorage.removeItem("customer");
    this.router.navigate(["login"]);
  }

  display = false;
 onPress() {
  this.router.navigate(["supplier"]);
 }

 onPressDisplay(){
   this.router.navigate(["displaybills"])
 }
 onPressStore(){
  this.router.navigate(['storebills'])
}
onPressUpdate(){
  this.router.navigate(['alterbills'])
}
onPressDelete(){
  this.router.navigate(['deletebills'])
}
onPressFind(){
  this.router.navigate(['findbills'])
}

}
