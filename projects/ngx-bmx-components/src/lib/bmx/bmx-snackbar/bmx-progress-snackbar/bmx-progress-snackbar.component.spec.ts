import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxProgressSnackbarComponent } from './bmx-progress-snackbar.component';

describe('BmxProgressSnackbarComponent', () => {
  let component: BmxProgressSnackbarComponent;
  let fixture: ComponentFixture<BmxProgressSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxProgressSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxProgressSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
