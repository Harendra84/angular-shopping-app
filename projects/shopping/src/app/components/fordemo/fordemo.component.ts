import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  Products:any[] = [
    {Name:'TV', Price: 77000.33},
    {Name:'Mobile', Price: 35000.33},
    {Name:'Nike Casuals', Price: 2400.33}
  ];
   
  constructor() { }

  ngOnInit(): void {
    
  }
  DeleteClick(i:number){
     var flag = confirm('Are you sure, what to delete?');
     if(flag==true) {
      this.Products.splice(i,1);
     }
  }
}
