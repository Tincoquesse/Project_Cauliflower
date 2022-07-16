import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavbarTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarTopComponent]

})
export class SharedModule { }
