import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayviewComponent } from './payview.component';

describe('PayviewComponent', () => {
  let component: PayviewComponent;
  let fixture: ComponentFixture<PayviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
