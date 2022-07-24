import {Component, OnInit} from '@angular/core';
import {Category} from "../../../api/model/Category";
import {CauliflowerService} from "../../../api/service/cauliflower.service";
import {map, NEVER} from "rxjs";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";

@Component({
  selector: 'app-offer-card-list',
  templateUrl: './offer-card-list.component.html',
  styleUrls: ['./offer-card-list.component.css']
})
export class OfferCardListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private service: CauliflowerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.service.getAllCategories().pipe(
      map(data => data as Category[])
    ).subscribe(results => {
      this.categories = results
    });
  }

  onClick(category: string) {
    this.router.navigate([RoutesConfig.subPage, category]);
  }
}

