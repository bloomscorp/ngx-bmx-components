import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {BmxSnackData} from "../interface/bmx-snack-data";
import {BmxSnackbarComponent} from "../bmx-snackbar/bmx-snackbar.component";

@Component({
	selector: 'bmx-error-snackbar',
	templateUrl: '../bmx-snackbar/bmx-snackbar.component.html',
	styleUrls: ['../bmx-snackbar/bmx-snackbar.component.scss']
})
export class BmxErrorSnackbarComponent extends BmxSnackbarComponent implements OnInit {

	private static containerClass = 'fr-error-snack';
	private static buttonClass = 'fr-fire-snack-error-button';

	constructor(
		private _snackbarComponentRef: MatSnackBarRef<BmxErrorSnackbarComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public override data: BmxSnackData
	) {
		super(_snackbarComponentRef, data);
	}

	ngOnInit(): void {
		this.init(
			BmxErrorSnackbarComponent.containerClass,
			BmxErrorSnackbarComponent.buttonClass
		);
	}
}
