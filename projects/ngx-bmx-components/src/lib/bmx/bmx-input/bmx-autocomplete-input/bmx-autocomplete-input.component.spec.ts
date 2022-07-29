import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxAutocompleteInputComponent } from './bmx-autocomplete-input.component';

describe('BmxAutocompleteInputComponent', () => {
  let component: BmxAutocompleteInputComponent;
  let fixture: ComponentFixture<BmxAutocompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxAutocompleteInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxAutocompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
