import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCardComponent } from './components/training-card/training-card.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { TrainingListComponent } from "./components/training-list/training-list.component";



@NgModule({
  declarations: [
    TrainingCardComponent,
    SummaryPageComponent,
    TrainingListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CauliflowerSummaryModule { }
