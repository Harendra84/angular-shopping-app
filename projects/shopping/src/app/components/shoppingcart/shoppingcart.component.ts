import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  Categories:string[] = [];
  Products:any[] = [];
  CartItems:any[] = [];
  CartCount:number = 0;
  ShowCart:boolean = false;

  LoadCartCount(){
    this.CartCount = this.CartItems.length;
  }

  LoadCategories(){
    fetch('http://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data=> {
      data.unshift("all");
      this.Categories = data;
    })
  }

  LoadProducts(url:string){
    fetch(url)
    .then(response=> response.json())
    .then(data=>{
      this.Products = data;
    })
  }


  constructor() { }

  ngOnInit(): void {
     this.LoadCategories();
     this.LoadProducts('http://fakestoreapi.com/products');
     this.LoadCartCount();
  }

  CategoryChanged(e:any){
     if(e.target.value=="all") {
       this.LoadProducts('http://fakestoreapi.com/products');
     } else {
      this.LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
     }
  }

  AddToCartClick(id:number){
     fetch(`http://fakestoreapi.com/products/${id}`)
     .then(response=>response.json())
     .then(data=>{
        this.CartItems.push(data);
        alert(`${data.title}\nAdded to Cart`);
        this.LoadCartCount();
     })
  }
  ShowCartClick(){
    this.ShowCart = (this.ShowCart==true)?false:true;
  }
  DeleteCartItem(index:number){
     let flag = confirm("Are you sure, want to delete?");
     if(flag==true) {
        this.CartItems.splice(index,1);
        this.LoadCartCount();
     }
  }
}
