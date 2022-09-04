import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCardComponent } from './components/training-card/training-card.component';
import { OfferPageComponent } from './pages/summary-page/offer-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';



@NgModule({
  declarations: [
    TrainingCardComponent,
    OfferPageComponent,
    SummaryPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CauliflowerSummaryModule { }
