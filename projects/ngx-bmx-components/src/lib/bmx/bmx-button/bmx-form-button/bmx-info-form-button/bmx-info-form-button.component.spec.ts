import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxInfoFormButtonComponent } from './bmx-info-form-button.component';

describe('BmxInfoFormButtonComponent', () => {
  let component: BmxInfoFormButtonComponent;
  let fixture: ComponentFixture<BmxInfoFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxInfoFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxInfoFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
