import { Component } from "@angular/core";
import { Category } from "../model/category.mode";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector:'shop',
    templateUrl: 'shop.component.html'
})
export class ShopComponent{
 
     public selectedCategory : Category |null =null;
     public productsPerPage = 6;
     public selectedPage = 1;
     


    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository){}

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


    }