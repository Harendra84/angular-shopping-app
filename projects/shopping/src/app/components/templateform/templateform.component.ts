import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  isCityInValid:boolean = true;
  isEvenInvalid:boolean = false;
  isCaps:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  VerifyCity(e:any) {
      if(e.target.value=="-1") {
        this.isCityInValid = true;
      } else {
        this.isCityInValid = false;
      }
  }
  VerifyEven(e:any){
     if(parseInt(e.target.value) %2 == 0) {
        this.isEvenInvalid = false;
     } else {
        this.isEvenInvalid = true;
     }
  }
  VerifyCaps(e:any){
     if(e.keyCode>=65 && e.keyCode<=90){
         this.isCaps = true;
     } else {
       this.isCaps = false;
     }
  }
}
