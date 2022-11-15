import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxContentInputGlassmorphicComponent } from './bmx-content-input-glassmorphic.component';

describe('BmxContentInputGlassmorphicComponent', () => {
  let component: BmxContentInputGlassmorphicComponent;
  let fixture: ComponentFixture<BmxContentInputGlassmorphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxContentInputGlassmorphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxContentInputGlassmorphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
