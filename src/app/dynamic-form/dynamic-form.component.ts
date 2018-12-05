import { Component, OnInit } from '@angular/core';
import { AngularService } from '../services/angular-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  formName: string;
  formSavedFlag: boolean = false;
  formElements: any;
   public myForm: FormGroup;
   public tempArray = {};
   loading = false;
  // publi myForm = new FormGroup({});
  constructor(
    private angularService: AngularService
  ) { }

  ngOnInit() {
    this.angularService.getJSON().subscribe(data => {
      console.log(data);
      this.formName = data.name;
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
      this.loading = true;
    });
  }

  formSaved() {
    this.formSavedFlag = true;
  }

}
