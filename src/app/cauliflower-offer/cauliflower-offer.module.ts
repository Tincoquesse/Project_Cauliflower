import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CauliflowerOfferPageComponent } from './pages/cauliflower-offer-page/cauliflower-offer-page.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { OfferCardListComponent } from './components/offer-card-list/offer-card-list.component';



@NgModule({
  declarations: [
    CauliflowerOfferPageComponent,
    OfferCardComponent,
    OfferCardListComponent
  ],
  exports: [
    CauliflowerOfferPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CauliflowerOfferModule { }
