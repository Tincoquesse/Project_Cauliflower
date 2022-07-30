import {Component, Input} from '@angular/core';
import {Training} from "../../../api/model/Training";

@Component({
  selector: 'app-subcategory-checkbox',
  templateUrl: './subcategory-checkbox.component.html',
  styleUrls: ['./subcategory-checkbox.component.css']
})
export class SubcategoryCheckboxComponent {

  @Input() training: Training| undefined;

}
