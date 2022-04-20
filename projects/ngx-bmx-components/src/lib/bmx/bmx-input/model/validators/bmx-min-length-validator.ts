import {BmxValidator} from "../../interface/bmx-validator";
import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";

export class BmxMinLengthValidator implements BmxValidator {

	public constructor(
		public minlength: number,
		public errorCode: string = 'minlength',
		public message: string = `This field has to be at least ${minlength} characters long!`,
		public validator: ((control: AbstractControl) => (ValidationErrors | null)) = Validators.minLength(minlength)
	) {
	}
}
