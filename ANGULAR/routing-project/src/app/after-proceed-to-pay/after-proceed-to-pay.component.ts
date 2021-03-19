import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-proceed-to-pay',
  templateUrl: './after-proceed-to-pay.component.html',
  styleUrls: ['./after-proceed-to-pay.component.css']
})
export class AfterProceedToPayComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  onClickHome(){
     this.router.navigate(["dashboard"]);
  }

  OnClickCart(){
     this.router.navigate(["cart"]);
  }

  logout()
  {
    sessionStorage.removeItem("customer");
    this.router.navigate(["login"]);
  }
}
