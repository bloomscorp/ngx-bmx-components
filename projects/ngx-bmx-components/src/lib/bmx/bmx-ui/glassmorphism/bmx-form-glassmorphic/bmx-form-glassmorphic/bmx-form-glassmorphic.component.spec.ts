import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxFormGlassmorphicComponent } from './bmx-form-glassmorphic.component';

describe('BmxFormGlassmorphicComponent', () => {
  let component: BmxFormGlassmorphicComponent;
  let fixture: ComponentFixture<BmxFormGlassmorphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxFormGlassmorphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxFormGlassmorphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
