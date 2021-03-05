import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Stock } from "./stock.model";

@Injectable({providedIn:('root')})
export class stockservice
{
constructor(public httpClient:HttpClient){}

loadstock():Observable<Stock[]>{
    return this.httpClient.get<Stock[]>("http://localhost:9191/medstock/displayall");
}

/*
insertstock():Observable<Stock[]>{
    return this.httpClient.put
}
*/
}