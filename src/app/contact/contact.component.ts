import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators, AbstractControl } from '@angular/forms';

const enteredName = (control: AbstractControl) =>{
  return control.value!=='unanomus' ? null :{enteredName:true};
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  
  contactForm = new FormGroup({
    /*name : new FormControl('Mohammad',Validators.required, ),*/
    /*name : new FormControl('Mohammad',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30),enteredName])),*/
    name : new FormControl(),
    phone : new FormControl(),
    subject : new FormControl(),
    message : new FormControl()
  })
  constructor() { }
  onSubmit(form){

    alert("Form Submitted");
  }
  ngOnInit() {

    /*const name ='Fareed';
    this.contactForm.patchValue({
      name,
    })*/

  }

}

function newFunction() {
  return 'unanimous';
}

