import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../../storage/service/storage.service";
import {Training} from "../../../api/model/Training";
import {BehaviorSubject, Observable} from "rxjs";
import {FormControl, Validators} from "@angular/forms";
import {CauliflowerService} from "../../../api/service/cauliflower.service";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  public trainings: Observable<Training[]> | undefined;
  email = new FormControl('', [Validators.email]);

  isLoading$ =  new BehaviorSubject<boolean>(false);
  isLoading = this.isLoading$.asObservable();

  constructor(private storageService: StorageService, private service: CauliflowerService, private router: Router) { }

  ngOnInit(): void {
    this.trainings = this.storageService.trainingOrderList;
  }

  onSubmit() {
    if (this.email.valid){
      this.isLoading$.next(true)
      this.service.sendOffer(this.email.value? this.email.value : "")
        .subscribe(() => {
          this.router.navigateByUrl(RoutesConfig.endPage)
          this.isLoading$.next(false)
        }
      )
    }
  }
  hasEmailValidateError = (): boolean =>
    !!this.email.errors?.hasOwnProperty('email');
}
