import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  product:any = {};
  displayTemplate:boolean = true;
  buttonText:string = 'Preview';

  LoadProduct(){
    fetch('http://fakestoreapi.com/products/2')
    .then(response=> response.json())
    .then(data=>{
      this.product = data;
    })
  }

  constructor() { }

  ngOnInit(): void {
     this.LoadProduct();
  }

  ToggleDisplay(){
    this.displayTemplate = (this.displayTemplate==true)?false:true;
    this.buttonText = (this.buttonText=='Description')?'Preview':'Description';
  }

}
