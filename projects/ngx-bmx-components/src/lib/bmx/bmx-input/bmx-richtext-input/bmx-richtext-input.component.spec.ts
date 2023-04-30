import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxRichtextInputComponent } from './bmx-richtext-input.component';

describe('BmxRichtextInputComponent', () => {
  let component: BmxRichtextInputComponent;
  let fixture: ComponentFixture<BmxRichtextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxRichtextInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxRichtextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
