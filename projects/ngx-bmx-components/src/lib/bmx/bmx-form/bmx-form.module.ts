import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BmxFormComponent} from './bmx-form/bmx-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BmxInputModule} from "../bmx-input/bmx-input.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
	declarations: [
		BmxFormComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		BmxInputModule,
		FlexLayoutModule
	]
})
export class BmxFormModule {
}
