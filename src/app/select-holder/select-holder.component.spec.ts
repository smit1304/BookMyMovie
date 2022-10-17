import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHolderComponent } from './select-holder.component';

describe('SelectHolderComponent', () => {
  let component: SelectHolderComponent;
  let fixture: ComponentFixture<SelectHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
