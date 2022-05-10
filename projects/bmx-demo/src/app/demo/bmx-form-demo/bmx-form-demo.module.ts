import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmxFormDemoRoutingModule } from './bmx-form-demo-routing.module';
import { BmxFormDemoComponent } from './bmx-form-demo/bmx-form-demo.component';


@NgModule({
  declarations: [
    BmxFormDemoComponent
  ],
  imports: [
    CommonModule,
    BmxFormDemoRoutingModule
  ]
})
export class BmxFormDemoModule { }
