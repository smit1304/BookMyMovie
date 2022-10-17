import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-hall-and-seat-list',
  templateUrl: './hall-and-seat-list.component.html',
  styleUrls: ['./hall-and-seat-list.component.css'],
})
export class HallAndSeatListComponent implements OnInit {
  hallList = ['Hall A', 'Hall B'];
  constructor(private app: AppComponent, private router: Router) {}
  sitRows = [
    {
      row: 1,
      sits: [
        {
          sitId: 'A1',
          booked: false,
          selected: false,
        },
        {
          sitId: 'A2',
          booked: false,
          selected: false,
        },
        {
          sitId: 'A3',
          booked: false,
          selected: false,
        },
      ],
    },
    {
      row: 2,
      sits: [
        {
          sitId: 'B1',
          booked: false,
          selected: false,
        },
        {
          sitId: 'B2',
          booked: false,
          selected: false,
        },
        {
          sitId: 'B3',
          booked: false,
          selected: false,
        },
      ],
    },
    {
      row: 3,
      sits: [
        {
          sitId: 'C1',
          booked: true,
          selected: false,
        },
        {
          sitId: 'C2',
          booked: true,
          selected: false,
        },
        {
          sitId: 'C3',
          booked: true,
          selected: false,
        },
      ],
    },
  ];
  selectedSeatCount = 0;
  seatClick(sit: any) {
    if (sit.booked == true) {
      return;
    }
    if (sit.selected) {
      sit.selected = !sit.selected;
      return;
    }
    let seatC = 0;
    this.sitRows.forEach((el) => {
      el.sits.forEach((els) => {
        if (els.selected) {
          seatC++;
        }
      });
    });
    if (seatC < this.selectedSeatCount) {
      // this.sitRows.forEach((el) => {
      //   el.sits.forEach((els) => {
      //     els.selected = false;
      //   });
      // });
      sit.selected = !sit.selected;
    }
  }
  selectedHall = null;
  showSeats = false;
  // showSeats() {}
  abcd = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
  ];
  generateDummySits(row: number, col: number) {
    let ans: any[] = [];
    if (row >= this.abcd.length) {
      return ans;
    }
    for (let i = 0; i < row; i++) {
      let objRow = {
        row: i + 1,
        sits: <any>[],
      };
      for (let j = 0; j < col; j++) {
        objRow.sits.push({
          sitId: this.abcd[i] + (j + 1).toString(),
          booked: Math.floor(Math.random() * 10) > 8,
          selected: false,
        });
      }
      ans.push(objRow);
    }
    return ans;
  }
  ngOnInit(): void {
    this.sitRows = this.generateDummySits(6, 10);
    this.app.setScreenSelected(null);
    this.app.setSeatSelectedC(null);
    this.app.setSeatSelected(null);
  }
  confirmSeats() {
    this.app.setScreenSelected(this.selectedHall);
    this.app.setSeatSelectedC(this.selectedSeatCount);
    let seats: string[] = [];
    this.sitRows.forEach((el) => {
      el.sits.forEach((els) => {
        if (els.selected) {
          seats.push(els.sitId);
        }
      });
    });
    this.app.setSeatSelected(seats.join(', '));
    this.router.navigate(['/home/selectRest/paylist']);
  }
  isValid() {
    if (
      this.selectedHall == null ||
      this.selectedSeatCount == null ||
      this.selectedSeatCount == 0
    ) {
      return false;
    }
    let seatC = 0;
    this.sitRows.forEach((el) => {
      el.sits.forEach((els) => {
        if (els.selected) {
          seatC++;
        }
      });
    });

    return seatC == this.selectedSeatCount;
  }
}
