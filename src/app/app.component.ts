import { Component } from '@angular/core';
import {RoutesConfig} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_Cauliflower';


  routes: { label: string, route: string }[] = [
    {
      label: 'Home',
      route: RoutesConfig.homePage,
    },
    {
      label: 'Offer',
      route: RoutesConfig.offerPage,
    },
  ];

}
