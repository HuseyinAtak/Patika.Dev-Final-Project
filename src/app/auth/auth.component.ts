import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { Cart } from '../model/cart.model';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public orderPage:boolean=true;
  public username:any;
  public password:any;
  public passwordAgain:any;
  public errorMessage:any='';
  public customer:Customer=new Customer();
  public order :boolean=true;
  manuelAlert:string= "Lutfen Parolayi Dogrulayiniz."
  constructor(private router:Router , private authService : AuthService, private cart:Cart) { }
  
  ngOnInit(): void {
  }

  login(ngForm: NgForm){
    if(ngForm.valid){
      this.authService.authenticate(this.customer.username!, this.customer.password!)
      .subscribe(response=>{
        if(response){
          alert("Giris Basarili." + " Kullanici Adi:" + this.customer.username)
          this.cart.username=this.customer.username!;
          this.router.navigateByUrl('/shop');
        }else {
          this.errorMessage= 'Hatali Kullanici Adi veya Parola.'
          alert(this.errorMessage)
        }
      })
    }else{
      this.errorMessage='Bilgileri eksiksiz giriniz.'
      alert(this.errorMessage)
    }
  }
  submitCustomer(ngForm: NgForm){
    if(ngForm.valid && this.customer.password==this.customer.passwordAgain){
      this.authService.saveCustomer(this.customer)
      .subscribe();
      alert("Kayit Basarili" +"Kullanici Adi: "+ this.customer.username );
      this.orderPage=true;
    }else if (ngForm.valid && this.customer.password!==this.customer.passwordAgain){
      alert("Parolalar Eslesmiyor.")
    }
  }
  orderChange(){
    if(this.orderPage==true){
      this.orderPage=false;
    }else{
      this.orderPage=true;
    }
  }

}
