import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-payview',
  templateUrl: './payview.component.html',
  styleUrls: ['./payview.component.css'],
})
export class PayviewComponent implements OnInit {
  constructor(private app: AppComponent, private router: Router) {}

  ngOnInit(): void {
    this.seatc = this.app.getSeatSelectedC();
  }
  seatc: any;
  seatCost: any = 200;
  selectePay: any;
  paymentOptions = ['Cash', 'Paytm/gpay'];
  proceed() {
    this.router.navigate(['/home/payslip']);
  }
}
