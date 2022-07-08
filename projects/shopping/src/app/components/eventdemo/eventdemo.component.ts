import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  Users:any[] = [
    {UserName: 'john'},
    {UserName: 'john12'},
    {UserName: 'john_nit'},
    {UserName: 'david'}
  ];
  StatusMessage:string = '';
  isError:boolean = false;
  RegExp:any = /(?=.*[A-Z])\w{4,10}/;
  PasswordMessage:string = '';
  showCapsError:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  VerifyUser(e:any){
     for(var user of this.Users)
     {
        if(user.UserName==e.target.value){
           this.StatusMessage = 'User Name Taken - Try Another';
           this.isError = true;
           break;
        } else {
          this.StatusMessage = 'User Name - Available';
          this.isError = false;
        }
     }
  }
  VerifyPassword(e:any){
      if(e.target.value.match(this.RegExp)){
         this.PasswordMessage = 'Strong Password';
      } else {
         if(e.target.value.length<4){
             this.PasswordMessage = 'Poor Password';
         } else {
           this.PasswordMessage = 'Weak Password';
         }
      }
  }
  VerifyCaps(e:any){
      if(e.keyCode>=65 && e.keyCode<=90){
         this.showCapsError = true;
      } else {
        this.showCapsError = false;
      }
  }
  Message:string = '';
  SpeakerTouched(){
    this.Message = "Sony Speaker - 4500.00/-";
  }
}
