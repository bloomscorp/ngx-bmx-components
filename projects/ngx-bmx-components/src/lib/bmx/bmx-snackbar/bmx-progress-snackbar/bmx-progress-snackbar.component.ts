import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";
import {BmxSnackProgressData} from "../interface/bmx-snack-progress-data";

@Component({
	selector: 'bmx-progress-snackbar',
	templateUrl: './bmx-progress-snackbar.component.html',
	styleUrls: ['./bmx-progress-snackbar.component.scss']
})
export class BmxProgressSnackbarComponent implements OnInit {

	constructor(
		@Inject(MAT_SNACK_BAR_DATA) public data: BmxSnackProgressData
	) {
	}

	ngOnInit(): void {
	}
}
