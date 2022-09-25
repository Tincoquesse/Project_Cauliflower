import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CauliflowerOfferModule} from "./cauliflower-offer/cauliflower-offer.module";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";

import {HttpClientModule} from "@angular/common/http";
import {CauliflowerOfferSubModule} from "./cauliflower-offer-sub/cauliflower-offer-sub.module";
import {CauliflowerSummaryModule} from "./cauliflower-summary/cauliflower-summary.module";
import {CauliflowerEndPageModule} from "./cauliflower-end-page/cauliflower-end-page.module";


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
    HttpClientModule,
    CauliflowerOfferSubModule,
    CauliflowerSummaryModule,
    CauliflowerEndPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
