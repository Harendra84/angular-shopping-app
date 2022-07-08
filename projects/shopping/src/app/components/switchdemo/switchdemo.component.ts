import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {

  product:any = {};
  templateToDisplay:string = "basic";

  LoadProduct(){
    fetch('http://fakestoreapi.com/products/2')
    .then(response=>response.json())
    .then(data=>{
      this.product = data;
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.LoadProduct();
  }
  OnButtonClick(e:any){
      this.templateToDisplay = e.target.name;
  }

}
