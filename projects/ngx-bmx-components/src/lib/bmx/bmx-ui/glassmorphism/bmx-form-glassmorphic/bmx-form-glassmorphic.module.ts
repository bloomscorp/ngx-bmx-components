import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BmxFormGlassmorphicComponent} from './bmx-form-glassmorphic/bmx-form-glassmorphic.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";


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
		FlexLayoutModule
	]
})
export class BmxFormGlassmorphicModule {
}
