import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavbarTopComponent} from "./shared/components/navbar-top/navbar-top.component";
import {CauliflowerOfferModule} from "./cauliflower-offer/cauliflower-offer.module";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CauliflowerOfferModule,
    AppRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
