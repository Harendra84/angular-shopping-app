import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent implements OnInit {


  constructor(private fb: FormBuilder) { }


  frmRegister  = this.fb.group({
     UserName: ['', [Validators.required, Validators.minLength(4)]],
     Mobile: ['',[Validators.required, Validators.pattern(/\+91\d{10}/)]]
  });

  get UserName(){
    return this.frmRegister.get('UserName') as FormControl;
  }
  get Mobile(){
    return this.frmRegister.get('Mobile') as FormControl;
  }
   ngOnInit(): void {
  }

}
