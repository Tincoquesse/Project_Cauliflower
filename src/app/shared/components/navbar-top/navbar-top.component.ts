import {Component, Input} from '@angular/core';
import {Routes} from "../../model/routes";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent {

  @Input() routes: Routes[] = [];

  constructor(private router: Router) {
  }

  onClick() {
    this.router.navigateByUrl(RoutesConfig.homePage);
  }
}
