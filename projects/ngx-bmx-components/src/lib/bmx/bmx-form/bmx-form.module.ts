import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BmxFormComponent} from './bmx-form/bmx-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BmxInputModule} from "../bmx-input/bmx-input.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BmxFormButtonModule} from "../bmx-button/bmx-form-button/bmx-form-button.module";


@NgModule({
	declarations: [
		BmxFormComponent
	],
	exports: [
		BmxFormComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		BmxInputModule,
		FlexLayoutModule,
		BmxFormButtonModule
	]
})
export class BmxFormModule {
}
