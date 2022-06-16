import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {BmxSnackData} from "../interface/bmx-snack-data";
import {BmxSnackbarComponent} from "../bmx-snackbar/bmx-snackbar.component";

@Component({
	selector: 'bmx-success-snackbar',
	templateUrl: '../bmx-snackbar/bmx-snackbar.component.html',
	styleUrls: ['../bmx-snackbar/bmx-snackbar.component.scss']
})
export class BmxSuccessSnackbarComponent extends BmxSnackbarComponent implements OnInit {

	private static containerClass = 'fr-success-snack';
	private static buttonClass = 'fr-fire-snack-success-button';

	constructor(
		private _snackbarComponentRef: MatSnackBarRef<BmxSuccessSnackbarComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public override data: BmxSnackData
	) {
		super(_snackbarComponentRef, data);
	}

	ngOnInit(): void {
		this.init(
			BmxSuccessSnackbarComponent.containerClass,
			BmxSuccessSnackbarComponent.buttonClass
		);
	}
}
