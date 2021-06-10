import { Component, ɵmarkDirty } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 cardform = new FormGroup({
  name : new FormControl('',[Validators.minLength(5),
    Validators.required]),
  cardNumber : new FormControl('',[Validators.minLength(16),
    Validators.maxLength(16),Validators.required,
    Validators.pattern('[0-9]{16}')]),
  expiryDate: new FormControl('',[Validators.minLength(5),
    Validators.maxLength(5),
    Validators.required, 
    Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
  cvv : new FormControl('',[Validators.minLength(3),
    Validators.maxLength(3),
    Validators.required
    ]),
 });
  title = 'credit-card-form'
constructor(){
  console.log(this.cardform);
  console.log(this.cardform.controls.name)
  console.log(this.cardform.controls.name.errors)
}


submit(event){
    event.preventDefault();
  console.log("submitted");
}
}
