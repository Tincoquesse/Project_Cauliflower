import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CauliflowerOfferModule} from "./cauliflower-offer/cauliflower-offer.module";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {ServiceModule} from "./api/service.module";
import { HttpClientModule} from "@angular/common/http";


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
    SharedModule,
    ServiceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
