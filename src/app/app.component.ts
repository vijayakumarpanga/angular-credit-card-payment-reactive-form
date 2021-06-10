import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 cardform = new FormGroup({
  name : new FormControl('',[Validators.minLength(5),Validators.required]),
 });
  title = 'credit-card-form'
constructor(){
  console.log(this.cardform);
  console.log(this.cardform.controls.name)
  console.log(this.cardform.controls.name.errors)
}

}
