import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../../storage/service/storage.service";
import {Training} from "../../../api/model/Training";
import {Observable} from "rxjs";
import {FormControl, Validators} from "@angular/forms";
import {CauliflowerService} from "../../../api/service/cauliflower.service";
import {Router, RouterLink} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";
import {Offer} from "../../../api/model/Offer";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  public trainings: Observable<Training[]> | undefined;
  email = new FormControl('', [Validators.email]);

  constructor(private storageService: StorageService, private service: CauliflowerService, private router: Router) { }

  ngOnInit(): void {
    this.trainings = this.storageService.trainingOrderList;
  }

  onSubmit() {
    if (this.email.valid){
      // let offer: Offer = {
      //
      // }
      // this.service.sendOffer()
      this.router.navigateByUrl(RoutesConfig.homePage)
    }

  }
  hasEmailValidateError = (): boolean =>
    !!this.email.errors?.hasOwnProperty('email');
}
