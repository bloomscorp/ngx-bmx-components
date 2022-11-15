import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmxInputGlassmorphicComponent } from './bmx-input-glassmorphic/bmx-input-glassmorphic.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
	declarations: [
		BmxInputGlassmorphicComponent
	],
	exports: [
		BmxInputGlassmorphicComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class BmxInputModule { }
