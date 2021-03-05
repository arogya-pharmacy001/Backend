import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient,private router:Router) { }

  private baseUrl="http://localhost:9191/customer/";
  saveDetails(cust:Customer):Observable<any>
  {
    let url=this.baseUrl+"insert";
    return this.http.post(url,cust);
  }

  login():Observable<any>
  {
    let cust
    let url=this.baseUrl+"display";
    return this.http.get(url,cust);
  }


  public InsertUserFromRemote(customer:Customer) :any
  {
    return this.http.post("http://localhost:9191/customer/insert",customer);


  }

}
