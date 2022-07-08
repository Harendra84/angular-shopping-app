import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  CategoryName:null|string = null;
  Products:any[] = [];

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.CategoryName = this.route.snapshot.paramMap.get('category');
    this.data.GetProductsByCategory(this.CategoryName).subscribe(product=> this.Products = product);
  }

}
