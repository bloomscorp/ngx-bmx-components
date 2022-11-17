import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassmorphicBmxFormDemoComponent } from './glassmorphic-bmx-form-demo.component';

describe('GlassmorphicBmxFormDemoComponent', () => {
  let component: GlassmorphicBmxFormDemoComponent;
  let fixture: ComponentFixture<GlassmorphicBmxFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassmorphicBmxFormDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassmorphicBmxFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
