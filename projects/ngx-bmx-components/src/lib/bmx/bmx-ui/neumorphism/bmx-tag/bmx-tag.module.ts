import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmxMicroTagComponent } from './bmx-micro-tag/bmx-micro-tag.component';


@NgModule({
	declarations: [
		BmxMicroTagComponent
	],
	exports: [
		BmxMicroTagComponent
	],
	imports: [
		CommonModule
	]
})
export class BmxTagModule {

}
