import { Component, ɵmarkDirty } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { DataFormat } from './data-format'
import { CardFormat } from './card-format'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardform = new FormGroup({
    name: new FormControl('', [Validators.minLength(5),
    Validators.required]),
    cardNumber: new CardFormat('', [Validators.minLength(16),
    Validators.maxLength(19), Validators.required,
    Validators.pattern('[0-9|\-]{19}')]),
    expiryDate: new DataFormat('', [Validators.minLength(5),
    Validators.maxLength(5),
    Validators.required,
    Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    cvv: new FormControl('', [Validators.minLength(3),
    Validators.maxLength(3),
    Validators.required,
    Validators.pattern(/[0-9]{3}/)
    ]),
  });
  title = 'credit-card-form'
  constructor() {
    console.log(this.cardform);
    console.log(this.cardform.controls.name)
    console.log(this.cardform.controls.name.errors)
  }


  submit(event) {
    event.preventDefault();
    console.log("submitted");
  }
  reset() {
    this.cardform.reset();
  }
}
