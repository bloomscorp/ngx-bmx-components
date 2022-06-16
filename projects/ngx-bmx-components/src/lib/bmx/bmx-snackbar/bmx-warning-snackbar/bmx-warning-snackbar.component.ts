import {Component, Inject, OnInit} from '@angular/core';
import {BmxSnackbarComponent} from "../bmx-snackbar/bmx-snackbar.component";
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {BmxSnackData} from "../interface/bmx-snack-data";

@Component({
	selector: 'bmx-warning-snackbar',
	templateUrl: '../bmx-snackbar/bmx-snackbar.component.html',
	styleUrls: ['../bmx-snackbar/bmx-snackbar.component.scss']
})
export class BmxWarningSnackbarComponent extends BmxSnackbarComponent implements OnInit {

	private static containerClass = 'fr-warning-snack';
	private static buttonClass = 'fr-fire-snack-warning-button';

	constructor(
		private _snackbarComponentRef: MatSnackBarRef<BmxWarningSnackbarComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public override data: BmxSnackData
	) {
		super(_snackbarComponentRef, data);
	}

	ngOnInit(): void {
		this.init(
			BmxWarningSnackbarComponent.containerClass,
			BmxWarningSnackbarComponent.buttonClass
		);
	}
}
