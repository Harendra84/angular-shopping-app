import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css']
})
export class StyledemoComponent implements OnInit {

  StyleObject:any = {
    'position': '',
    'left': '',
    'top' : ''
  }

  TrackLocation(e:any){
      this.StyleObject = {
        'position': 'fixed',
        'left': e.clientX + 'px',
        'top': e.clientY + 'px'
      }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
