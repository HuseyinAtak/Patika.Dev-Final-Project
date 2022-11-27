import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Category } from 'src/app/model/category.mode';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public selectedCategory : Category |null =null;
  public productsPerPage = 6;
  public selectedPage = 1;
  allProje:boolean=true;
public selectedProduct: Product |null =null;
  public filterText:string="";
  
  


 constructor(
     private productRepository: ProductRepository,
     private categoryRepository: CategoryRepository,
     public cart:Cart,
     private router:Router
     ){}

     get products():Product[]{
         let index = (this.selectedPage-1)*this.productsPerPage;
         return this.productRepository
         .getProducts(this.selectedCategory)
         .slice(index,index+this.productsPerPage);
     }
     get categories():Category[]{
         return this.categoryRepository.getCategories();
     }
     changeCategory(newCategory:Category | null ){
       this.selectedCategory=newCategory;
       if(newCategory==null){
         this.allProje=true;
       }else{
         this.allProje=false;
       }
    }

displayDetails(product:Product){
    this.selectedProduct=product;
    window.scrollTo(0, 0);
  }
  
     get pageNumbers(): number[]{
         return Array(Math.ceil(this.productRepository
             .getProducts(this.selectedCategory).length/this.productsPerPage))
             .fill(0)
             .map((a,i)=>i+1);
         }
  
     changePage(p:number){
         this.selectedPage= p;
     }

     addProductToCart(product:Product){
         this.cart.addItem(product);
     }


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  
}
