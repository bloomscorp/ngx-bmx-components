import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxInputGlassmorphicComponent } from './bmx-input-glassmorphic.component';

describe('BmxInputGlassmorphicComponent', () => {
  let component: BmxInputGlassmorphicComponent;
  let fixture: ComponentFixture<BmxInputGlassmorphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxInputGlassmorphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxInputGlassmorphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
