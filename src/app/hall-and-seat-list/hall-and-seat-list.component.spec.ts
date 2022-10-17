import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallAndSeatListComponent } from './hall-and-seat-list.component';

describe('HallAndSeatListComponent', () => {
  let component: HallAndSeatListComponent;
  let fixture: ComponentFixture<HallAndSeatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallAndSeatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallAndSeatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
