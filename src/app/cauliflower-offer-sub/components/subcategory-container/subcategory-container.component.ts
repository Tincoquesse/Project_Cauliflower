import {Component, Input, OnInit} from '@angular/core';
import {Subcategory} from "../../../api/model/Subcategory";

@Component({
  selector: 'app-subcategory-container',
  templateUrl: './subcategory-container.component.html',
  styleUrls: ['./subcategory-container.component.css']
})
export class SubcategoryContainerComponent implements OnInit {

  @Input() subcategory: Subcategory | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
