import {Component} from '@angular/core';

@Component({
  selector: 'app-subcategory-form-sender',
  templateUrl: './subcategory-form-sender.component.html',
  styleUrls: ['./subcategory-form-sender.component.css']
})
export class SubcategoryFormSenderComponent {

  onSubmit() {
  console.log("Submit working")
  }
}
