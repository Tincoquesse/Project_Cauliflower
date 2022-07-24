import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../api/model/Category";

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent {

  @Input() category: Category| undefined;
}
