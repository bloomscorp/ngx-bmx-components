import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxTextAreaInputComponent } from './bmx-text-area-input.component';

describe('BmxTextAreaInputComponent', () => {
  let component: BmxTextAreaInputComponent;
  let fixture: ComponentFixture<BmxTextAreaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxTextAreaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxTextAreaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
