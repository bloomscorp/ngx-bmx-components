import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxErrorSnackbarComponent } from './bmx-error-snackbar.component';

describe('BmxErrorSnackbarComponent', () => {
  let component: BmxErrorSnackbarComponent;
  let fixture: ComponentFixture<BmxErrorSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxErrorSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxErrorSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
