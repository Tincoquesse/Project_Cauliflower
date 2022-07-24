import { Component, OnInit } from '@angular/core';
import {Subcategory} from "../../../api/model/Subcategory";
import {CauliflowerService} from "../../../api/service/cauliflower.service";
import {map} from "rxjs";
import {Category} from "../../../api/model/Category";

@Component({
  selector: 'app-subcategories-list',
  templateUrl: './subcategories-list.component.html',
  styleUrls: ['./subcategories-list.component.css']
})
export class SubcategoriesListComponent implements OnInit {

  subcategories: Subcategory[] =[];

  constructor(private service: CauliflowerService) { }

  ngOnInit(): void {
    this.service.getSubcategoriesFromCategory("IT").pipe(
      map(data => data as Subcategory[])
    ).subscribe(results => {
      this.subcategories = results
    });
  }

}
