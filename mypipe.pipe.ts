import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'mypipe'
})
export class MypipePipe implements PipeTransform {
    get hobbies = [
        'reading'
        'dancing',
        'singing',
        'internet'
        ];
transform(value: any, hobbie: string): any {
if(hobbie === 'reading'){
return "good hobbie is "+value;
}
else
{
return "bad hobbie is "+value;
}
}
}
