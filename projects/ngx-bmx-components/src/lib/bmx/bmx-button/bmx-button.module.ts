import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BmxButtonComponent} from './bmx-button/bmx-button.component';


@NgModule({
	declarations: [
		BmxButtonComponent
	],
	exports: [
		BmxButtonComponent
	],
	imports: [
		CommonModule
	]
})
export class BmxButtonModule { }
