import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = null;
  useremail = null;
  constructor(private router: Router) {}
  signInUser(data: any) {
    this.username = data.name;
    this.useremail = data.email;
    this.router.navigate(['/home']);
  }
  logUserOut() {
    this.useremail = null;
    this.username = null;
    this.router.navigate(['/login']);
  }
  getUserName() {
    return this.username;
  }
  getUserEmail() {
    return this.useremail;
  }

  movieSelected = null;
  theatereSelected = null;
  citySelected = null;
  showTimeSlected = null;
  screenSelected = null;
  seatSelected = null;
  seatSelectedC = null;
  movieName = null;
  movieDuration = null;

  setMovieName(item: any) {
    this.movieName = item;
  }
  getmovieName() {
    return this.movieName;
  }

  setMovieDuration(item: any) {
    this.movieDuration = item;
  }

  getMovieDuration() {
    return this.movieDuration;
  }

  setMovieSelected(item: any) {
    this.movieSelected = item;
  }
  getMovieSelected() {
    return this.movieSelected;
  }
  setTheatereSelected(item: any) {
    this.theatereSelected = item;
  }
  getTheatereSelected() {
    return this.theatereSelected;
  }
  setCitySelected(item: any) {
    this.citySelected = item;
  }
  getCitySelected() {
    return this.citySelected;
  }
  setShowTimeSelected(item: any) {
    this.showTimeSlected = item;
  }
  getShowTimeSelected() {
    return this.showTimeSlected;
  }
  setScreenSelected(item: any) {
    this.screenSelected = item;
  }
  getScreenSelected() {
    return this.screenSelected;
  }
  setSeatSelected(item: any) {
    this.seatSelected = item;
  }
  getSeatSelected() {
    return this.seatSelected;
  }
  setSeatSelectedC(item: any) {
    this.seatSelectedC = item;
  }
  getSeatSelectedC() {
    return this.seatSelectedC;
  }
}
