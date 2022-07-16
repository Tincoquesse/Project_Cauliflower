import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NavbarTopComponent} from "./components/navbar-top/navbar-top.component";



@NgModule({
  declarations: [
    NavbarTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarTopComponent
  ]

})
export class SharedModule { }
