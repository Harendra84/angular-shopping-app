import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakestoreComponent implements OnInit {

  productId:number = 1;
  product:any = {};
  isVisible:boolean = false;
  buttonText:string = 'Show';

  LoadProduct(){
     fetch(`http://fakestoreapi.com/products/${this.productId}`)
     .then(response => response.json())
     .then(data => {
        this.product = data;
     })
  }

  constructor() { }

  ngOnInit(): void {
    this.LoadProduct();
  }

  NextClick(){
     this.productId++;
     this.LoadProduct();
  }
  PreviousClick(){
    this.productId--;
    this.LoadProduct();
  }
  ToggleDetails(){
    this.isVisible = (this.isVisible==false)?true:false;
    this.buttonText = (this.buttonText=='Show')?'Hide':'Show';
  }

}
