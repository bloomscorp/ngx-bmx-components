import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoRoutingModule} from './demo-routing.module';
import {DemoComponent} from './demo/demo.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BmxTagModule} from "../../../../ngx-bmx-components/src/lib/bmx/bmx-ui/neumorphism/bmx-tag/bmx-tag.module";
import {BmxSnackDemoModule} from "./bmx-snack-demo/bmx-snack-demo.module";
import {MAT_SNACK_BAR_DATA, MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    DemoComponent
  ],
	imports: [
		CommonModule,
		DemoRoutingModule,
		FlexLayoutModule,
		BmxTagModule,
		BmxSnackDemoModule
	]
})
export class DemoModule { }
