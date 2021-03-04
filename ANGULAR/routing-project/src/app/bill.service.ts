import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from './bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(public httpClient:HttpClient) { }

  loadBillDetails():Observable<Bill[]>{
    return this.httpClient.get<Bill[]>("http://localhost:9191/bill/display");
  }
}
