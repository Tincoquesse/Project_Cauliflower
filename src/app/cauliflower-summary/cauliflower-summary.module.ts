import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCardComponent } from './components/training-card/training-card.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { TrainingListComponent } from "./components/training-list/training-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    TrainingCardComponent,
    SummaryPageComponent,
    TrainingListComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class CauliflowerSummaryModule { }
