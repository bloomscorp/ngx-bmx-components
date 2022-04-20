import {BmxValidator} from "../../interface/bmx-validator";
import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";

export class BmxDefaultEmailValidator implements BmxValidator {
	public constructor(
		public errorCode: string = 'email',
		public message: string = 'Please enter a valid email address',
		public validator: ((control: AbstractControl) => (ValidationErrors | null)) = Validators.email
	) {
	}
}
