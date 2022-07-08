import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(data:any[], reverse?:boolean){
      if(reverse){
         data.sort();
         data.reverse();
         return data;
      } else {
        return data.sort();
      }
  }

}
