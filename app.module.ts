import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpComponent } from './emp/emp.component';
import { Mypipe } from './mypipe.pipe';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    Mypipe,
    HobbiesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

