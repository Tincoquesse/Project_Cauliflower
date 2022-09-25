import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Training} from "../../../api/model/Training";
import {StorageService} from "../../../storage/service/storage.service";


@Component({
  selector: 'app-subcategory-checkbox',
  templateUrl: './subcategory-checkbox.component.html',
  styleUrls: ['./subcategory-checkbox.component.css']
})
export class SubcategoryCheckboxComponent {

  @Input() training: Training | undefined;
  @Output() onDoneClick = new EventEmitter<Training>();
  isChecked: boolean = false;
  isDetails: boolean = false;


  constructor(private storage: StorageService) {
  }

  doneClick() {
    this.onDoneClick.emit(this.training);
    this.isChecked = this.storage.isContainTraining(this.training);
  };


  onDetails() {
    this.isDetails = !this.isDetails;
  }
}
