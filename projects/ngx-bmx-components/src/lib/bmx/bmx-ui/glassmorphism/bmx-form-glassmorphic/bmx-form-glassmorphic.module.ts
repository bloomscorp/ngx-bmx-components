import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BmxFormGlassmorphicComponent} from './bmx-form-glassmorphic/bmx-form-glassmorphic.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BmxInputModule} from "../bmx-input/bmx-input.module";


@NgModule({
	declarations: [
		BmxFormGlassmorphicComponent
	],
	exports: [
		BmxFormGlassmorphicComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		BmxInputModule
	]
})
export class BmxFormGlassmorphicModule {
}
