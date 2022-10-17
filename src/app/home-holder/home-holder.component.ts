import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home-holder',
  templateUrl: './home-holder.component.html',
  styleUrls: ['./home-holder.component.css'],
})
export class HomeHolderComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private app: AppComponent
  ) {}
  user = null;
  ngOnInit(): void {
    this.user = this.app.getUserName();
    if (this.user == null) {
      this.router.navigate(['/login']);
    }
  }
  logOutClicked() {
    this.openPopup();
    // this.router.navigate(['/login']);
  }

  openPopup() {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      height: 'auto',
      width: '400px',
      disableClose: true,
      data: {
        displayText: 'Are you sure you want to logout?',
        displayTitle: 'Confirm',
        result: false,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == null) {
      } else {
        if (result) {
          this.app.logUserOut();
        } else {
        }
      }
    });
  }
}
