import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmxInputGlassmorphicComponent } from './bmx-input-glassmorphic/bmx-input-glassmorphic.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BmxContentInputGlassmorphicComponent } from './bmx-content-input-glassmorphic/bmx-content-input-glassmorphic.component';



@NgModule({
	declarations: [
		BmxInputGlassmorphicComponent,
  BmxContentInputGlassmorphicComponent
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
