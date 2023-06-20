import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxMultipleAutocompleteInputComponent } from './bmx-multiple-autocomplete-input.component';

describe('BmxMultipleAutocompleteInputComponent', () => {
  let component: BmxMultipleAutocompleteInputComponent;
  let fixture: ComponentFixture<BmxMultipleAutocompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxMultipleAutocompleteInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxMultipleAutocompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
