import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {valueExists} from "bmx-pastebox";
import {BmxInfoSnackbarComponent} from "./bmx-info-snackbar/bmx-info-snackbar.component";
import {BmxSuccessSnackbarComponent} from "./bmx-success-snackbar/bmx-success-snackbar.component";
import {BmxWarningSnackbarComponent} from "./bmx-warning-snackbar/bmx-warning-snackbar.component";
import {BmxErrorSnackbarComponent} from "./bmx-error-snackbar/bmx-error-snackbar.component";
import {BmxProgressSnackbarComponent} from "./bmx-progress-snackbar/bmx-progress-snackbar.component";
import {BmxConfirmationSnackbarComponent} from "./bmx-confirmation-snackbar/bmx-confirmation-snackbar.component";
import {BmxSnackConfirmationData} from "./interface/bmx-snack-confirmation-data";

@Injectable({
	providedIn: 'root'
})
export class BmxSnackbarService {

	private static readonly WORKING: string = 'working';
	public static readonly CONFIRM: string = 'Please confirm your choice.';

	constructor(
		private _snackbar: MatSnackBar
	) {
	}

	public info(msg: string, emojiCode?: string | null, snackDuration?: number | undefined): void {
		this._snackbar.openFromComponent(BmxInfoSnackbarComponent, {
			data: {
				message: msg,
				buttonText: 'Okay',
				hasButton: true,
				emoji: valueExists(emojiCode) ? emojiCode : '&#x1F399'
			},
			duration: snackDuration
		});
	}

	public success(msg: string, emojiCode?: string | null): void {
		this._snackbar.openFromComponent(BmxSuccessSnackbarComponent, {
			data: {
				message: msg,
				buttonText: '👍',
				hasButton: true,
				emoji: valueExists(emojiCode) ? emojiCode : '&#x2728'
			},
			duration: 6000
		});
	}

	public warning(msg: string, emojiCode?: string | null): void {
		this._snackbar.openFromComponent(BmxWarningSnackbarComponent, {
			data: {
				message: msg,
				buttonText: 'Accept',
				hasButton: true,
				emoji: valueExists(emojiCode) ? emojiCode : '&#x1F6A8'
			},
			duration: 0
		});
	}

	public error(msg: string, emojiCode?: string | null): void {
		this._snackbar.openFromComponent(BmxErrorSnackbarComponent, {
			data: {
				message: msg,
				buttonText: '🙁',
				hasButton: false,
				emoji: valueExists(emojiCode) ? emojiCode : '&#x1F613'
			},
			duration: 0
		});
	}

	public progress(msg?: string | null): void {
		this._snackbar.openFromComponent(BmxProgressSnackbarComponent, {
			data: {
				message: (msg == null) ? BmxSnackbarService.WORKING : msg
			}
		});
	}

	public confirmation(data: BmxSnackConfirmationData): void {

		data.message = (data.message == null) ? BmxSnackbarService.CONFIRM : data.message;
		data.reject = (data.reject == null) ? () => this.dismiss() : data.reject;
		data.injectDismiss = (data.injectDismiss == null) ? true : data.injectDismiss;

		this._snackbar.openFromComponent(BmxConfirmationSnackbarComponent, {
			data: data,
			duration: 0
		});
	}

	public dismiss(): void {
		this._snackbar.dismiss();
	}

	public genericError(): void {
		this.error('Something went wrong!');
	}
}
