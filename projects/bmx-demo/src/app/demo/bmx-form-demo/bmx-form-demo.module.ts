import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmxFormDemoRoutingModule } from './bmx-form-demo-routing.module';
import { BmxFormDemoComponent } from './bmx-form-demo/bmx-form-demo.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BmxFormModule} from "ngx-bmx-components";


@NgModule({
  declarations: [
    BmxFormDemoComponent
  ],
	imports: [
		CommonModule,
		BmxFormDemoRoutingModule,
		FlexLayoutModule,
		BmxFormModule
	]
})
export class BmxFormDemoModule { }
