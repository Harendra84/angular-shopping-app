import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sentencecase'
})
export class SentenceCasePipe implements PipeTransform
{
    transform(data:string) {
       var firstLetter = data.charAt(0); 
       var restChars = data.substring(1);
       var sentence = firstLetter.toUpperCase() + restChars.toLowerCase();
       return sentence;
    }
}
