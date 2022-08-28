import {Component, OnInit} from '@angular/core';
import {Subcategory} from "../../../api/model/Subcategory";
import {CauliflowerService} from "../../../api/service/cauliflower.service";
import {map, switchMap, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-subcategories-list',
  templateUrl: './subcategories-list.component.html',
  styleUrls: ['./subcategories-list.component.css']
})
export class SubcategoriesListComponent implements OnInit {

  subcategories: Subcategory[] = [];

  constructor(private service: CauliflowerService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['category']),
      switchMap(category => this.service.getSubcategoriesFromCategory(category)),
      tap(results => this.subcategories = results)
    ).subscribe();
  }


}
