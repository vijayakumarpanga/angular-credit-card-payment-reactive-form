import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() control : FormControl ;
  @Input() label : string;
  constructor() { 

    console.log("inside input : ",this.control)
    console.log("label" , this.label)
  }
  showError(){
  
  const {dirty,touched,errors} = this.control;
  return dirty && touched && errors
   
}

  ngOnInit(): void {

  }

}
