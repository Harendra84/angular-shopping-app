import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackingdemo',
  templateUrl: './trackingdemo.component.html',
  styleUrls: ['./trackingdemo.component.css']
})
export class TrackingdemoComponent implements OnInit {

  Products:any[] = [
    {Name: 'TV', Price:46000.33},
    {Name: 'Mobile', Price:24000.44},
    {Name: 'Watch', Price: 5300.33}
  ];

  UpdateProduct(){
    alert('Update Clicked');
    this.Products = [
      {Name: 'TV', Price:46000.33},
      {Name: 'Mobile', Price:24000.44},
      {Name: 'Watch', Price: 5300.33},
      {Name: 'Nike Casuals', Price: 6000.33}
    ];
  }

  TrackChange(index:number){
    return index;   // the index of changed item.
  }

  constructor() { }

  ngOnInit(): void {
  }

}
