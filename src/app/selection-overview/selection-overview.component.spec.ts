import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionOverviewComponent } from './selection-overview.component';

describe('SelectionOverviewComponent', () => {
  let component: SelectionOverviewComponent;
  let fixture: ComponentFixture<SelectionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
