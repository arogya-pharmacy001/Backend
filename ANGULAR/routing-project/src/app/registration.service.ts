import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from './customer.module';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http:HttpClient) { }

  private baseUrl="http://localhost:9191/customer/";
  
  checkLogin(customer:any):Observable<Customer>
  {
    return this.http.post<Customer>("http://localhost:9191/customer/login",customer)
  }

  addCustomer(customer:Customer):Observable<string>
  {
      return this.http.post("http://localhost:9191/customer/insert",customer,{responseType:'text'})
  }

  

}
