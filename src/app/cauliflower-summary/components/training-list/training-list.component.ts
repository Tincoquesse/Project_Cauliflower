import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../storage/service/storage.service";
import {Training} from "../../../api/model/Training";
import {Observable} from "rxjs";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  public trainings: Observable<Training[]> | undefined;
  email = new FormControl('', [Validators.email]);

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.trainings = this.storageService.trainingOrderList;
  }
  //TODO
  // onSubmit() {
  //
  // }
}
