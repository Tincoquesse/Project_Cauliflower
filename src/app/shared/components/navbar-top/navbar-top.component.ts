import {Component, Input} from '@angular/core';
import {Routes} from "../../model/routes";

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent {

  @Input() routes: Routes[] = [];

}
