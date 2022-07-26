import {Component, OnInit} from '@angular/core';
import {BmxSnackbarService} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-snackbar/bmx-snackbar.service";

@Component({
	selector: 'app-bmx-snack-demo',
	templateUrl: './bmx-snack-demo.component.html',
	styleUrls: ['./bmx-snack-demo.component.scss']
})
export class BmxSnackDemoComponent implements OnInit {

	constructor(
		private _snack: BmxSnackbarService
	) {
	}

	ngOnInit(): void {
	}

	public showSnack(): void {
		this._snack.info(
			'Snackbar works!'
		);
	}
}
