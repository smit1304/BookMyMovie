import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { HomeHolderComponent } from './home-holder/home-holder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UtilModule } from './util/util.module';
import { MovielistComponent } from './movielist/movielist.component';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { TheaterlistComponent } from './theaterlist/theaterlist.component';
import { HallAndSeatListComponent } from './hall-and-seat-list/hall-and-seat-list.component';
import { SelectionOverviewComponent } from './selection-overview/selection-overview.component';
import { PayviewComponent } from './payview/payview.component';
import { BookingdoneComponent } from './bookingdone/bookingdone.component';
import { SelectHolderComponent } from './select-holder/select-holder.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SigninComponent,
    HomeHolderComponent,
    MovielistComponent,
    ConfirmPopupComponent,
    TheaterlistComponent,
    HallAndSeatListComponent,
    SelectionOverviewComponent,
    PayviewComponent,
    BookingdoneComponent,
    SelectHolderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    UtilModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
