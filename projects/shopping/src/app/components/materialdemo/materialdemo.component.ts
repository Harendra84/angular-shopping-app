import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialdemo',
  templateUrl: './materialdemo.component.html',
  styleUrls: ['./materialdemo.component.css']
})
export class MaterialdemoComponent implements OnInit {

  title:string = 'shopping cart details';
  notifications:string[] = ['Missed Call from Manager','Facebook Updated','OS Updated'];
  sales:number = 0.26;
  notificationMap:any = {
    '=0' : 'No Notifications',
    '=1' : 'One Notification',
    'other': '# Notifications'
  }

  cities:string[] = [
    'Delhi',
    'Bangalore',
    'Hyd',
    'Chennai',
    'Mumbai',
    'Goa'
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
