import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxFormComponent } from './bmx-form.component';

describe('BmxFormComponent', () => {
  let component: BmxFormComponent;
  let fixture: ComponentFixture<BmxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
