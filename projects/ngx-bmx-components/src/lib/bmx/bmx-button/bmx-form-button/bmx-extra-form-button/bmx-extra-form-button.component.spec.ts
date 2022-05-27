import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxExtraFormButtonComponent } from './bmx-extra-form-button.component';

describe('BmxExtraFormButtonComponent', () => {
  let component: BmxExtraFormButtonComponent;
  let fixture: ComponentFixture<BmxExtraFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxExtraFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxExtraFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
