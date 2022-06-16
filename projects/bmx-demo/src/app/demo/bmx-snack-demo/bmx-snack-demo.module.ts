import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmxSnackDemoComponent } from './bmx-snack-demo/bmx-snack-demo.component';
import {BmxSnackbarModule} from "../../../../../ngx-bmx-components/src/lib/bmx/bmx-snackbar/bmx-snackbar.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
	declarations: [
		BmxSnackDemoComponent
	],
	exports: [
		BmxSnackDemoComponent
	],
	imports: [
		CommonModule,
		BmxSnackbarModule
	]
})
export class BmxSnackDemoModule { }
