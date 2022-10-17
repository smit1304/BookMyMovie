import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-theaterlist',
  templateUrl: './theaterlist.component.html',
  styleUrls: ['./theaterlist.component.css'],
})
export class TheaterlistComponent implements OnInit {
  theaterList = [
    {
      value: 'PVR Cinemas',
    },
    {
      value: 'Rajhansh Cinemas',
    },
    {
      value: 'Box Office',
    },
    {
      value: 'sfsdf Cinemas',
    },
  ];
  cityList = [
    {
      value: 'Ahemdabad',
      theaterList: ['Time', 'Cinepolis','cinemax','PVR acropolis','City Gold'],
    },
    {
      value: 'Navsari',
      theaterList: ['PVR Cinemas', 'Rajhansh Cinemas','Lakshmi Cinemas'],
    },
    {
      value: 'Surat',
      theaterList: ['Box office', 'Rajhansh Cinemas','Cinepolis','Time Cinema','PVR Rahul Raj','Bollywood Metro'],
    },
    {
      value: 'Anand',
      theaterList: ['INOX Cinemas', 'Gold City Pluse'],
    },
    {
      value: 'Nadiad',
      theaterList: ['PVR Cinemas', 'Rajhansh Cinemas'],
    },
  ];
  selectedTheater = null;
  selectedTheaterList: Array<string> = [];
  selectedCity = null;

  resetTheater(city: any) {
    this.selectedTheater = null;
    this.selectedTheaterList = city.theaterList;
  }
  constructor(private router: Router, private app: AppComponent) {}
  goNext() {
    this.app.setCitySelected(this.selectedCity);
    this.app.setTheatereSelected(this.selectedTheater);
    this.router.navigate(['/home/selectRest/hallandseatlist']);
  }
  goPrevious() {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    this.app.setCitySelected(null);
    this.app.setTheatereSelected(null);
  }
}
