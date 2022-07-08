import { Component, OnInit } from '@angular/core';
import { CaptchaService } from '../../services/captcha.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-apidemo',
  templateUrl: './apidemo.component.html',
  styleUrls: ['./apidemo.component.css']
})
export class ApidemoComponent implements OnInit {

  Categories:string[] = [];
  Products:any[] = []
  Code:string = '';
  constructor(private data:DataService, private captcha:CaptchaService) { }

  ngOnInit(): void {
    this.data.GetCategories().subscribe(category => this.Categories = category);
    this.data.GetProducts().subscribe(product=> this.Products=product);
    this.Code = this.captcha.GenerateCode();
  }

}
