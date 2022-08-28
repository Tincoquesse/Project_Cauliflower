import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {CauliflowerService} from "../../../api/service/cauliflower.service";
import {Observable} from "rxjs";
import {Training} from "../../../api/model/Training";
import {StorageService} from "../../../storage/service/storage.service";

@Component({
  selector: 'app-subcategory-form-sender',
  templateUrl: './subcategory-form-sender.component.html',
  styleUrls: ['./subcategory-form-sender.component.css']
})
export class SubcategoryFormSenderComponent implements OnInit {

  private trainings: Observable<Training[]> | undefined;

  constructor(private storage: StorageService) {
  }

  ngOnInit(): void {
    this.trainings = this.storage.trainingOrderList;
  }

  /* TODO
  email = new FormControl('', [Validators.required, Validators.email]);

    onSubmit() {
      if (this.email.valid) {

      }
    }*/
}
