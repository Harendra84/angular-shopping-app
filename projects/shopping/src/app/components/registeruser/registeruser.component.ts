import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ShoppingdataService } from './../../services/shoppingdata.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private data: ShoppingdataService, private router: Router) { }

  ngOnInit(): void {
  }

  SubmitForm(data:any){
    this.data.RegisterUser(data).subscribe();
    alert('Registered Successfully...');
    this.router.navigate(['/login']);
  }

}
