import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHolderComponent } from './home-holder.component';

describe('HomeHolderComponent', () => {
  let component: HomeHolderComponent;
  let fixture: ComponentFixture<HomeHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
