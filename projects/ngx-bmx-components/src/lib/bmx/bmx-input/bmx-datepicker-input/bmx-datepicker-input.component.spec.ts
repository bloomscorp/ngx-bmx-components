import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxDatepickerInputComponent } from './bmx-datepicker-input.component';

describe('BmxDatepickerInputComponent', () => {
  let component: BmxDatepickerInputComponent;
  let fixture: ComponentFixture<BmxDatepickerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxDatepickerInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxDatepickerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
