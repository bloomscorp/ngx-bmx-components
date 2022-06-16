import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxWarningSnackbarComponent } from './bmx-warning-snackbar.component';

describe('BmxWarningSnackbarComponent', () => {
  let component: BmxWarningSnackbarComponent;
  let fixture: ComponentFixture<BmxWarningSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxWarningSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxWarningSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
