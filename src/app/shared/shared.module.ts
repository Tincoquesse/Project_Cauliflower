import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';



@NgModule({
  declarations: [
    NavbarTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarTopComponent
  ]
})
export class SharedModule { }
