import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxSnackDemoComponent } from './bmx-snack-demo.component';

describe('BmxSnackDemoComponent', () => {
  let component: BmxSnackDemoComponent;
  let fixture: ComponentFixture<BmxSnackDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxSnackDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxSnackDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
