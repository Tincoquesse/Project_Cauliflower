import {Component} from '@angular/core';
import {RoutesConfig} from "./app-routing.module";
import {Routes} from "./shared/model/routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_Cauliflower';


  routes: Routes[] = [
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
