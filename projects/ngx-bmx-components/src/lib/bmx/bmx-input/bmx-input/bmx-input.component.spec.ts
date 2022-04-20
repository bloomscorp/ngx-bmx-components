import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxInputComponent } from './bmx-input.component';

describe('BmxInputComponent', () => {
  let component: BmxInputComponent;
  let fixture: ComponentFixture<BmxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
