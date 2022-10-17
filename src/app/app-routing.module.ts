import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingdoneComponent } from './bookingdone/bookingdone.component';
import { HallAndSeatListComponent } from './hall-and-seat-list/hall-and-seat-list.component';
import { HomeHolderComponent } from './home-holder/home-holder.component';
import { MovielistComponent } from './movielist/movielist.component';
import { PayviewComponent } from './payview/payview.component';
import { SelectHolderComponent } from './select-holder/select-holder.component';
import { SigninComponent } from './signin/signin.component';
import { TheaterlistComponent } from './theaterlist/theaterlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: SigninComponent },
  {
    path: 'home',
    component: HomeHolderComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'movielist' },
      { path: 'movielist', component: MovielistComponent },
      {
        path: 'selectRest',
        component: SelectHolderComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'theaterlist' },
          { path: 'theaterlist', component: TheaterlistComponent },
          { path: 'hallandseatlist', component: HallAndSeatListComponent },
          { path: 'paylist', component: PayviewComponent },
        ],
      },
      { path: 'payslip', component: BookingdoneComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
