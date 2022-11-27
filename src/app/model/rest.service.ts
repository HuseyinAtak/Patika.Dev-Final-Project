import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from './category.mode';
import { Customer } from './customer.model';
import { Education } from './educations.model';
import { Order } from './order.model';
import { Product } from './product.model';

@Injectable()
export class RestService {

  baseUrl:string= "http://localhost:3500/"
  token:string="";
  username:string="";
  constructor(private http:HttpClient) { }


  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl + "categories");
  }
  saveOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.baseUrl + 'orders', order)
  }
  getEducations():Observable<Education[]>{
    return this.http.get<Education[]>(this.baseUrl + 'educations');
  }
  setAuthentication(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.baseUrl + 'customer',customer);
  }
  getAuthentication(username:string, password:string):Observable<boolean>{
    return this.http.get<Customer[]>(this.baseUrl + 'customer').pipe(map((response: Customer[])=>{
      const hasCustomer:boolean = response.some(x => x.username == username && x.password == password);
      if (hasCustomer){
        this.token='loginSuccessfull'
        this.username=username;
      }
   
      return hasCustomer;
    }));
  }
  
  saveCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.baseUrl + 'customer', customer)
  }

  clearToken(){
    this.token= "";
    window.location.reload();
  }
}
