import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BmxFormDemoRoutingModule} from './bmx-form-demo-routing.module';
import {BmxFormDemoComponent} from './bmx-form-demo/bmx-form-demo.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BmxFormModule} from "../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/bmx-form.module";
import {GlassmorphicBmxFormDemoComponent} from './glassmorphic-bmx-form-demo/glassmorphic-bmx-form-demo.component';
import {
	BmxFormGlassmorphicModule
} from "../../../../../ngx-bmx-components/src/lib/bmx/bmx-ui/glassmorphism/bmx-form-glassmorphic/bmx-form-glassmorphic.module";


@NgModule({
	declarations: [
		BmxFormDemoComponent,
		GlassmorphicBmxFormDemoComponent
	],
	imports: [
		CommonModule,
		BmxFormDemoRoutingModule,
		FlexLayoutModule,
		BmxFormModule,
		BmxFormGlassmorphicModule
	]
})
export class BmxFormDemoModule {
}
