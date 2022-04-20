import {BmxValidator} from "../../interface/bmx-validator";
import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";

export class BmxPatternValidator implements BmxValidator {

	public constructor(
		public pattern: string | RegExp,
		public errorCode: string = 'pattern',
		public message: string = 'Wrong Format',
		public validator: ((control: AbstractControl) => (ValidationErrors | null)) = Validators.pattern(pattern)
	) {
	}
}
