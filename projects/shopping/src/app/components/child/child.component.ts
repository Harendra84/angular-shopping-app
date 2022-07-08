import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

 @Input() UserNameFromParent:string|null = null;
 
  PreviousValue:string|null = null;
  CurrentValue:string|null = null;
  Msg:string|null = null;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
      for(var property in changes)
      {
         let change = changes[property];
         this.CurrentValue = change.currentValue;
         this.PreviousValue = change.previousValue;
      }
      if(this.CurrentValue==this.PreviousValue) {
         this.Msg = "No Change Detected";
      } else {
        this.Msg = "Change Detected";
      }
  }
 
}
