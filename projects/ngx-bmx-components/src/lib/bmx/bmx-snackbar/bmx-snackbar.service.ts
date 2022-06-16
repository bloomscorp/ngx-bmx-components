import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {valueExists} from "bmx-pastebox";

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
		this._snackbar.openFromComponent(FireInfoSnackComponent, {
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
		this._snackbar.openFromComponent(FireSuccessSnackComponent, {
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
		this._snackbar.openFromComponent(FireWarningSnackComponent, {
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
		this._snackbar.openFromComponent(FireErrorSnackComponent, {
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
		this._snackbar.openFromComponent(FireProgressSnackComponent, {
			data: {
				message: (msg == null) ? BmxSnackbarService.WORKING : msg
			}
		});
	}

	public confirmation(data: SnackConfirmationData): void {

		data.message = (data.message == null) ? BmxSnackbarService.CONFIRM : data.message;
		data.reject = (data.reject == null) ? () => this.dismiss() : data.reject;
		data.injectDismiss = (data.injectDismiss == null) ? true : data.injectDismiss;

		this._snackbar.openFromComponent(FireConfirmationSnackComponent, {
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
