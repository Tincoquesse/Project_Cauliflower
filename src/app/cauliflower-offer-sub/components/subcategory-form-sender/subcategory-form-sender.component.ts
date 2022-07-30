import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-subcategory-form-sender',
  templateUrl: './subcategory-form-sender.component.html',
  styleUrls: ['./subcategory-form-sender.component.css']
})
export class SubcategoryFormSenderComponent {

  trainings: string[] = [];
  email = new FormControl('', [Validators.required, Validators.email]);


  onSubmit() {
//TODO: email validation
  }
}
