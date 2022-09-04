import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Training} from "../../../api/model/Training";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";

@Component({
  selector: 'app-subcategory-form-sender',
  templateUrl: './subcategory-form-sender.component.html',
  styleUrls: ['./subcategory-form-sender.component.css']
})
export class SubcategoryFormSenderComponent {
  

  constructor(private router: Router) {
  }

  onSubmit() {
    this.router.navigateByUrl(RoutesConfig.summaryPage);
  }
}
