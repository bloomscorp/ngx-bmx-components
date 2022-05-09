import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BmxContentInputComponent} from './bmx-content-input/bmx-content-input.component';
import {BmxInputComponent} from './bmx-input/bmx-input.component';
import {BmxSelectInputComponent} from './bmx-select-input/bmx-select-input.component';
import {BmxTextAreaInputComponent} from './bmx-text-area-input/bmx-text-area-input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { BmxImageInputComponent } from './bmx-image-input/bmx-image-input.component';


@NgModule({
	declarations: [
		BmxContentInputComponent,
		BmxInputComponent,
		BmxSelectInputComponent,
		BmxTextAreaInputComponent,
		BmxImageInputComponent
	],
	exports: [
		BmxInputComponent
	],
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		MatSelectModule
	]
})
export class BmxInputModule {

}
