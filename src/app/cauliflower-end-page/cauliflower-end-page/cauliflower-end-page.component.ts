import { Component, OnInit } from '@angular/core';
import {RoutesConfig} from "../../app-routing.module";
import {interval, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cauliflower-end-page',
  templateUrl: './cauliflower-end-page.component.html',
  styleUrls: ['./cauliflower-end-page.component.css']
})
export class CauliflowerEndPageComponent implements OnInit {


  timeLeft: number = 5;

  private timeSubscription: Subscription | undefined;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.timeSubscription = interval(1000).subscribe(() => {
      this.timeLeft -= 1;
      if (this.timeLeft < 0) {
        this.router.navigate([RoutesConfig.homePage])
      }
    });
  }

  ngOnDestroy() {
    this.timeSubscription?.unsubscribe();
  }
}
