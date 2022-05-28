import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoRoutingModule} from './demo-routing.module';
import {DemoComponent} from './demo/demo.component';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    DemoComponent
  ],
	imports: [
		CommonModule,
		DemoRoutingModule,
		FlexLayoutModule
	]
})
export class DemoModule { }
