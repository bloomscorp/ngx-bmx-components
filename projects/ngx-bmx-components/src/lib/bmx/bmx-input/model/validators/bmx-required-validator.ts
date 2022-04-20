import {BmxValidator} from "../../interface/bmx-validator";
import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";

export class BmxRequiredValidator implements BmxValidator {

	public constructor(
		public errorCode: string = 'required',
		public message: string = 'This field is required',
		public validator: ((control: AbstractControl) => (ValidationErrors | null)) = Validators.required
	) {
	}
}
