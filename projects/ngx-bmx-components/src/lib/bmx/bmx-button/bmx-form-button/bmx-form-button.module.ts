import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmxFormButtonComponent } from './bmx-form-button/bmx-form-button.component';



@NgModule({
	declarations: [
		BmxFormButtonComponent
	],
	exports: [
		BmxFormButtonComponent
	],
	imports: [
		CommonModule
	]
})
export class BmxFormButtonModule { }
