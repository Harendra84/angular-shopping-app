import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.css']
})
export class ContentprojectionComponent implements OnInit {

  product:any = { };
  thenBlock:TemplateRef<any>|null = null;

 @ViewChild("basic",{static:true}) basic:TemplateRef<any>|null = null;
 @ViewChild("preview",{static:true}) preview:TemplateRef<any>|null = null;
 @ViewChild("description",{static:true}) description:TemplateRef<any>|null = null;
 @ViewChild("rating",{static:true}) rating:TemplateRef<any>|null = null;

  LoadProduct(){
    fetch("http://fakestoreapi.com/products/2")
    .then(response=>response.json())
    .then(data=>{
      this.product = data;
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.LoadProduct();
    this.thenBlock = this.basic;
  }
 
  ChangeView(e:any){
     switch(e.target.name)
     {
       case "basic": 
       this.thenBlock = this.basic;
       break;
       case "preview": 
       this.thenBlock = this.preview;
       break;
       case "description": 
       this.thenBlock = this.description;
       break;
       case "rating": 
       this.thenBlock = this.rating;
       break;
     }
  }

}
