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
import {BmxImageInputComponent} from './bmx-image-input/bmx-image-input.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BmxNestedInputComponent} from './bmx-nested-input/bmx-nested-input.component';
import { BmxAutocompleteInputComponent } from './bmx-autocomplete-input/bmx-autocomplete-input.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { BmxDatepickerInputComponent } from './bmx-datepicker-input/bmx-datepicker-input.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";


@NgModule({
	declarations: [
		BmxContentInputComponent,
		BmxInputComponent,
		BmxSelectInputComponent,
		BmxTextAreaInputComponent,
		BmxImageInputComponent,
		BmxNestedInputComponent,
		BmxAutocompleteInputComponent,
		BmxDatepickerInputComponent
	],
	exports: [
		BmxInputComponent
	],
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		MatSelectModule,
		FlexLayoutModule,
		MatAutocompleteModule,
		MatDatepickerModule,
		MatNativeDateModule
	],
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
	]
})
export class BmxInputModule {


}
