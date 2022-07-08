import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() AllCount:number = 0;
  @Input() ElectronicsCount:number = 0;
  @Input() JeweleryCount:number = 0;
  @Input() MensCount:number = 0;
  @Input() WomensCount:number = 0;

  CategoryName:string = '';

  @Output() FilterClicked:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick(e:any){
     this.CategoryName = e.target.name;
     this.FilterClicked.emit(this.CategoryName);
  }

}
