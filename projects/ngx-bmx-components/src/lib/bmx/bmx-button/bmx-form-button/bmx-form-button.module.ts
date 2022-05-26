import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmxFormButtonComponent } from './bmx-form-button/bmx-form-button.component';
import { BmxConfirmFormButtonComponent } from './bmx-confirm-form-button/bmx-confirm-form-button.component';
import { BmxWarnFormButtonComponent } from './bmx-warn-form-button/bmx-warn-form-button.component';
import { BmxInfoFormButtonComponent } from './bmx-info-form-button/bmx-info-form-button.component';
import { BmxDangerFormButtonComponent } from './bmx-danger-form-button/bmx-danger-form-button.component';



@NgModule({
	declarations: [
		BmxFormButtonComponent,
  BmxConfirmFormButtonComponent,
  BmxWarnFormButtonComponent,
  BmxInfoFormButtonComponent,
  BmxDangerFormButtonComponent
	],
	exports: [
		BmxFormButtonComponent
	],
	imports: [
		CommonModule
	]
})
export class BmxFormButtonModule { }
