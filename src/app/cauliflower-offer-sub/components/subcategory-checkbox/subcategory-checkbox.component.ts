import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Training} from "../../../api/model/Training";

@Component({
  selector: 'app-subcategory-checkbox',
  templateUrl: './subcategory-checkbox.component.html',
  styleUrls: ['./subcategory-checkbox.component.css']
})
export class SubcategoryCheckboxComponent {

  @Input() training: Training| undefined;
  @Output() onDoneClick = new EventEmitter<string>();


  doneClick() {
      this.onDoneClick.emit(this.training?.name);
  };

}
