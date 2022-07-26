import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BmxFormDemoComponent} from './bmx-form-demo.component';

describe('BmxFormDemoComponent', () => {
  let component: BmxFormDemoComponent;
  let fixture: ComponentFixture<BmxFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxFormDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
