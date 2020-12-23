import { Component } from '@angular/core';
import {HobbiesService} from './hobbies.service';
@Component({
  selector: 'app-root',
  template: `
  <p>hi {{data}}</p>
  <li *ngFor="let h of itemsarray">
  <b> {{h}} </b>
  </li>`
})
export class AppComponent {
  title = 'demo-lab2';
  constructor(private hobbies:HobbiesService){
    
  }
}
