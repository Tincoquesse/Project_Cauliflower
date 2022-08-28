import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Training} from "../../../api/model/Training";
import {StorageService} from "../../../storage/service/storage.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-subcategory-checkbox',
  templateUrl: './subcategory-checkbox.component.html',
  styleUrls: ['./subcategory-checkbox.component.css']
})
export class SubcategoryCheckboxComponent {

  @Input() training: Training | undefined;
  @Output() onDoneClick = new EventEmitter<Training>();
  isChecked: boolean = false;


  constructor(private storage: StorageService, public dialog: MatDialog) {
  }

  doneClick() {
    this.onDoneClick.emit(this.training);
    this.isChecked = this.storage.isContainTraining(this.training);
  };


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
}
