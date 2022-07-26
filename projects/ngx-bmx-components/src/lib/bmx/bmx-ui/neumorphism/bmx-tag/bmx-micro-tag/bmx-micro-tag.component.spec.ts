import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxMicroTagComponent } from './bmx-micro-tag.component';

describe('BmxMicroTagComponent', () => {
  let component: BmxMicroTagComponent;
  let fixture: ComponentFixture<BmxMicroTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxMicroTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxMicroTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
