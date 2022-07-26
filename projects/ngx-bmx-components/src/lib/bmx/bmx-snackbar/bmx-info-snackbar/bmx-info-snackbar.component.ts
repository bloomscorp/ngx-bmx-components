import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {BmxSnackbarComponent} from "../bmx-snackbar/bmx-snackbar.component";
import {BmxSnackData} from "../interface/bmx-snack-data";

@Component({
	selector: 'bmx-info-snackbar',
	templateUrl: '../bmx-snackbar/bmx-snackbar.component.html',
	styleUrls: ['../bmx-snackbar/bmx-snackbar.component.scss']
})
export class BmxInfoSnackbarComponent extends BmxSnackbarComponent implements OnInit {

	private static containerClass = 'fr-info-snack';
	private static buttonClass = 'fr-fire-snack-info-button';

	constructor(
		private _snackbarComponentRef: MatSnackBarRef<BmxInfoSnackbarComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public override data: BmxSnackData
	) {
		super(_snackbarComponentRef, data);
	}

	ngOnInit(): void {
		this.init(
			BmxInfoSnackbarComponent.containerClass,
			BmxInfoSnackbarComponent.buttonClass
		);
	}
}
