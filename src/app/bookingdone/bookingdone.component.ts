import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
const html2PDF = require('jspdf-html2canvas');

@Component({
  selector: 'app-bookingdone',
  templateUrl: './bookingdone.component.html',
  styleUrls: ['./bookingdone.component.css'],
})
export class BookingdoneComponent implements OnInit {
  constructor(private app: AppComponent) {}

  movie = null;
  username = null;
  duration = null;
  seatCount = null;
  seatNumber = null;
  hall = null;
  theater = null;

  ngOnInit(): void {
    this.movie = this.app.getmovieName();
    this.hall = this.app.getScreenSelected();
    this.theater = this.app.getTheatereSelected();
    this.seatCount = this.app.getSeatSelectedC();
    this.seatNumber = this.app.getSeatSelected();
    this.duration = this.app.getMovieDuration();
    this.username = this.app.username;
  }
  downloadPDF() {
    // const doc = new jsPDF();
    let page = document.getElementById('pdfD');
    html2PDF(page, {
      jsPDF: {
        format: 'a4',
      },
      imageType: 'image/jpeg',
      output: './pdf/generate.pdf',
    });
  }
}
