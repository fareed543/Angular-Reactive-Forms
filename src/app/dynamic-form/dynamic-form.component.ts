import { Component, OnInit } from '@angular/core';
import { AngularService } from '../services/angular-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  formSavedFlag: boolean = false;
  formElements: any;
   public myForm: FormGroup;
   public tempArray = {};
   isLoading = false;
  constructor(
    private angularService: AngularService
  ) { }

  ngOnInit() {
    this.angularService.getJSON().subscribe(data => {
      this.formElements = data.schema;
      this.formElements.forEach(element => {
        if (element.Type == 'Radio') {
          this.tempArray[element.Group] = element.Required ? new FormControl(element.Default, Validators.required)
          : new FormControl(element.Default || '');
        } else {
          this.tempArray[element.Label] = element.Required ? new FormControl(element.Default || '', Validators.required)
          : new FormControl(element.Default || '');
        }
      });
      this.myForm = new FormGroup(this.tempArray);
      this.isLoading = true;
    });
  }

  formSaved() {
    this.formSavedFlag = true;
  }

}
