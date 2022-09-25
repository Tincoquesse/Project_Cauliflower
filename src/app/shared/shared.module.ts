import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NavbarTopComponent} from "./components/navbar-top/navbar-top.component";
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    NavbarTopComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports: [
        NavbarTopComponent,
        LoadingSpinnerComponent
    ]

})
export class SharedModule { }
