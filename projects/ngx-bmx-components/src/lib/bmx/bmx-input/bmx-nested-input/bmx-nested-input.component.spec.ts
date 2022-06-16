import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BmxNestedInputComponent} from './bmx-nested-input.component';

describe('BmxNestedInputComponent', () => {
  let component: BmxNestedInputComponent;
  let fixture: ComponentFixture<BmxNestedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxNestedInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxNestedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
