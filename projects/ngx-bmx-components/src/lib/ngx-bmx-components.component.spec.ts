import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxBmxComponentsComponent} from './ngx-bmx-components.component';

describe('NgxBmxComponentsComponent', () => {
  let component: NgxBmxComponentsComponent;
  let fixture: ComponentFixture<NgxBmxComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBmxComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBmxComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
