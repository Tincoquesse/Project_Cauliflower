import {NgModule} from '@angular/core';
import {CauliflowerOfferPageComponent} from "./cauliflower-offer/pages/cauliflower-offer-page/cauliflower-offer-page.component";
import {RouterModule, Routes} from "@angular/router";
import {CauliflowerHomePageComponent} from "./cauliflower-home/pages/cauliflower-home-page/cauliflower-home-page.component";
import {
  CauliflowerOfferSubPageComponent
} from "./cauliflower-offer-sub/pages/cauliflower-offer-sub-page/cauliflower-offer-sub-page.component";

export const enum RoutesConfig {
  homePage = 'home-page',
  offerPage = 'cauliflower-offer',
  subPage = 'cauliflower-offer-sub'
}

const routes: Routes = [
  {
    path: RoutesConfig.homePage,
    component: CauliflowerHomePageComponent
  },
  {
    path: RoutesConfig.subPage,
    component: CauliflowerOfferSubPageComponent
  },
  {
    path: RoutesConfig.offerPage,
    component: CauliflowerOfferPageComponent
  },
  {path: '', redirectTo: RoutesConfig.homePage, pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
