import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
export interface ConfirmInfo {
  displayText: any;
  displayTitle: any;
  result: any;
}
@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.css'],
})
export class ConfirmPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmInfo,
    private router: Router
  ) {}

  ngOnInit(): void {}
  noClicked() {
    this.dialogRef.close(false);
  }
  confirm() {
    this.dialogRef.close(true);
    // this.router.navigate(['login']);
  }
  cancel() {
    this.dialogRef.close(false);
  }
}
