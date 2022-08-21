import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {CauliflowerService} from "../../../api/service/cauliflower.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-subcategory-form-sender',
  templateUrl: './subcategory-form-sender.component.html',
  styleUrls: ['./subcategory-form-sender.component.css']
})
export class SubcategoryFormSenderComponent implements OnInit{

  private trainings: Observable<string[]>|undefined;

  constructor(private service: CauliflowerService) {
  }

  ngOnInit(): void {
    this.trainings = this.service.trainingNames;
  }



  email = new FormControl('', [Validators.required, Validators.email]);

  onSubmit() {
    if(this.email.valid) {

    }
  }
}
