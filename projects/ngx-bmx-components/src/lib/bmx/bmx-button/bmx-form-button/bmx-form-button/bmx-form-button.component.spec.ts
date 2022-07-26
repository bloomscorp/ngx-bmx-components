import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BmxFormButtonComponent} from './bmx-form-button.component';

describe('BmxFormButtonComponent', () => {
  let component: BmxFormButtonComponent;
  let fixture: ComponentFixture<BmxFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
