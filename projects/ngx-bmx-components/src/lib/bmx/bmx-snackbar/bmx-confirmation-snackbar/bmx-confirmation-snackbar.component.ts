import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";
import {BmxSnackConfirmationData} from "../interface/bmx-snack-confirmation-data";

@Component({
	selector: 'bmx-confirmation-snackbar',
	templateUrl: './bmx-confirmation-snackbar.component.html',
	styleUrls: ['./bmx-confirmation-snackbar.component.scss']
})
export class BmxConfirmationSnackbarComponent implements OnInit {

	public emoji: string = '&#x1F449';
	public crossEmoji: string = '&#x274C';
	public tickEmoji: string = '&#x2714';

	constructor(
		@Inject(MAT_SNACK_BAR_DATA) public data: BmxSnackConfirmationData,
		private _snackbar: MatSnackBar
	) {
	}

	ngOnInit(): void {
	}

	public accept(): void {
		this.data.accept();
		if (this.data.injectDismiss)
			this._snackbar.dismiss();
	}
}
