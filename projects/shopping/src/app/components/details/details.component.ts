import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  ProductId:null|string = null;
  Product:any = {};

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
     this.ProductId = this.route.snapshot.paramMap.get('id');
     this.data.GetProductsById(this.ProductId).subscribe(data=> this.Product = data);
  }

}
