import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxWarnFormButtonComponent } from './bmx-warn-form-button.component';

describe('BmxWarnFormButtonComponent', () => {
  let component: BmxWarnFormButtonComponent;
  let fixture: ComponentFixture<BmxWarnFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxWarnFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxWarnFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
