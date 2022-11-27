import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "./customer.model";
import { RestService } from "./rest.service";

@Injectable()
export class AuthService{
    constructor(private restService:RestService){

     }
    authenticate(username:string, password:string): Observable<boolean>{
        return this.restService.getAuthentication(username,password);
     }

     get authenticated():boolean{
        console.log(this.restService.token)
        return this.restService.token!='';
    }
     clear(){
         localStorage.clear();
     }
     saveCustomer(customer:Customer):Observable<Customer>{
        return this.restService.setAuthentication(customer);
      }
}