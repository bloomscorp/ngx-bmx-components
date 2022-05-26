import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxConfirmFormButtonComponent } from './bmx-confirm-form-button.component';

describe('BmxConfirmFormButtonComponent', () => {
  let component: BmxConfirmFormButtonComponent;
  let fixture: ComponentFixture<BmxConfirmFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxConfirmFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxConfirmFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
