import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {BmxSnackData} from "../interface/bmx-snack-data";

@Component({
	selector: 'bmx-snackbar',
	templateUrl: './bmx-snackbar.component.html',
	styleUrls: ['./bmx-snackbar.component.scss']
})
export class BmxSnackbarComponent implements OnDestroy {

	public containerClass!: string;
	public buttonClass!: string;
	public emoji: string = '&#x1F469';

	constructor(
		private _snackbarRef: MatSnackBarRef<BmxSnackbarComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public data: BmxSnackData
	) {
	}

	public init(containerClass: string, buttonClass: string): void {
		this.containerClass = containerClass;
		this.buttonClass = buttonClass;
	}

	public dismiss(): void {
		this._snackbarRef.dismiss();
	}

	ngOnDestroy(): void {
	}
}
