import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BmxSnackbarComponent} from './bmx-snackbar/bmx-snackbar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BmxConfirmationSnackbarComponent} from './bmx-confirmation-snackbar/bmx-confirmation-snackbar.component';
import {BmxErrorSnackbarComponent} from './bmx-error-snackbar/bmx-error-snackbar.component';
import {BmxInfoSnackbarComponent} from './bmx-info-snackbar/bmx-info-snackbar.component';
import { BmxProgressSnackbarComponent } from './bmx-progress-snackbar/bmx-progress-snackbar.component';
import { BmxSuccessSnackbarComponent } from './bmx-success-snackbar/bmx-success-snackbar.component';
import { BmxWarningSnackbarComponent } from './bmx-warning-snackbar/bmx-warning-snackbar.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {BmxPipeModule} from "../bmx-pipe/bmx-pipe.module";


@NgModule({
	declarations: [
		BmxSnackbarComponent,
		BmxConfirmationSnackbarComponent,
		BmxErrorSnackbarComponent,
		BmxInfoSnackbarComponent,
  BmxProgressSnackbarComponent,
  BmxSuccessSnackbarComponent,
  BmxWarningSnackbarComponent
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatTooltipModule,
		BmxPipeModule
	]
})
export class BmxSnackbarModule {
}
