import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-selection-overview',
  templateUrl: './selection-overview.component.html',
  styleUrls: ['./selection-overview.component.css'],
})
export class SelectionOverviewComponent implements OnInit {
  constructor(private app: AppComponent, private router: Router) {}

  ngOnInit(): void {
    console.log(this.app.getCitySelected());
    console.log(this.app.getTheatereSelected());
    this.item = this.app.getMovieSelected();
    
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        setTimeout(() => {
          this.loadData();
        }, 1500);
      }
    });
  }

  city: any;
  theater: any;
  item: any;
  hall: any;
  seatc: any;
  seat: any;
  loadData() {
    console.log(this.app.getCitySelected());
    console.log(this.app.getTheatereSelected());
    this.item = this.app.getMovieSelected();
    this.city = this.app.getCitySelected();
    this.theater = this.app.getTheatereSelected();
    this.hall = this.app.getScreenSelected();
    this.seatc = this.app.getSeatSelectedC();
    this.seat = this.app.getSeatSelected();
  }
}
