import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{
    public id :number|any;
    public name: string|any;
    public address: string|any;
    public city: string|any;
    public phone: string|any;
    public email:string|any;
    public isSent:boolean=false;
    
 constructor(public cart:Cart){

 }

 clearOrder(){
    this.id=null;
    this.name=this.address=this.city=this.phone=this.email=null;
    this.isSent=false;
    this.cart.clear();
 }

}