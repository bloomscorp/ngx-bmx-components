import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxDangerFormButtonComponent } from './bmx-danger-form-button.component';

describe('BmxDangerFormButtonComponent', () => {
  let component: BmxDangerFormButtonComponent;
  let fixture: ComponentFixture<BmxDangerFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxDangerFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxDangerFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
