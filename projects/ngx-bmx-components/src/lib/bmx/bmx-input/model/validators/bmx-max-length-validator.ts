import {BmxValidator} from "../../interface/bmx-validator";
import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";

export class BmxMaxLengthValidator implements BmxValidator {

	public constructor(
		public maxlength: number,
		public errorCode: string = 'maxlength',
		public message: string = `This field can be max ${maxlength} characters long!`,
		public validator: ((control: AbstractControl) => (ValidationErrors | null)) = Validators.maxLength(maxlength)
	) {
	}
}
