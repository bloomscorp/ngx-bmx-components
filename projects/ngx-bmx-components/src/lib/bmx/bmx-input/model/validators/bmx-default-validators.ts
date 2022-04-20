import {BmxValidator} from "../../interface/bmx-validator";
import {BmxRequiredValidator} from "./bmx-required-validator";
import {BmxMinLengthValidator} from "./bmx-min-length-validator";
import {BmxPatternValidator} from "./bmx-pattern-validator";
import {Validators} from "@angular/forms";

export class BmxDefaultValidators {

	public static contactValidator: BmxValidator[] = [
		new BmxRequiredValidator(),
		new BmxMinLengthValidator(10),
		new BmxPatternValidator(/^[0-9]{6,20}$/)
	]

	private static _emailRegEx: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	public static emailValidator: BmxValidator[] = [
		new BmxRequiredValidator(),
		{
			errorCode: 'email',
			message: 'Please enter a valid email address',
			validator: Validators.email
		},
		new BmxPatternValidator(this._emailRegEx)
	]
}
