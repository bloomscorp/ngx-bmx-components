import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BmxContentInputComponent} from './bmx-content-input.component';

describe('BmxContentInputComponent', () => {
  let component: BmxContentInputComponent;
  let fixture: ComponentFixture<BmxContentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxContentInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxContentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
