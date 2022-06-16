import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoRoutingModule} from './demo-routing.module';
import {DemoComponent} from './demo/demo.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BmxTagModule} from "../../../../ngx-bmx-components/src/lib/bmx/bmx-ui/neumorphism/bmx-tag/bmx-tag.module";


@NgModule({
  declarations: [
    DemoComponent
  ],
	imports: [
		CommonModule,
		DemoRoutingModule,
		FlexLayoutModule,
		BmxTagModule
	]
})
export class DemoModule { }
