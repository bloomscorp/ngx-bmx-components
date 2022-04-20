import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxSelectInputComponent } from './bmx-select-input.component';

describe('BmxSelectInputComponent', () => {
  let component: BmxSelectInputComponent;
  let fixture: ComponentFixture<BmxSelectInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxSelectInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
