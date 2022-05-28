import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BmxImageInputComponent} from './bmx-image-input.component';

describe('BmxImageInputComponent', () => {
  let component: BmxImageInputComponent;
  let fixture: ComponentFixture<BmxImageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxImageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxImageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
