import { Component, OnInit } from '@angular/core';
import { ShoppingdataService } from './../../services/shoppingdata.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  Users:any[] = [];

  constructor(private data: ShoppingdataService, private router: Router, private cookie: CookieService ) { }

  ngOnInit(): void {
    this.data.GetUsers().subscribe(user=>this.Users = user);
  }

  SubmitClick(data:any){
   for(var user of this.Users){
    console.log(this.Users);
    if(user.UserId==data.UserId && user.Password==data.Password)
    {
      this.router.navigate(['/categories']);
      this.cookie.set('userId', data.UserId);
      break;
    }
    else{
      this.router.navigate(['/usererror']);
    }
   }
  }
}
