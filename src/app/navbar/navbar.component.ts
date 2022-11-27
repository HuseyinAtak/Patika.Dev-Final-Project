import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { RestService } from '../model/rest.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:string="";
  count:number =0;
  constructor(public cart:Cart, private router:Router, private restService: RestService) { }

  ngOnInit(): void {
    if(this.cart && this.cart.itemCount)
      this.count=this.cart.itemCount;
  }

  routing(name:string){
    this.router.navigateByUrl(name);
    window.scrollTo(0, 0);
  }

  clearToken(){
    this.restService.clearToken();
  }
  
}
