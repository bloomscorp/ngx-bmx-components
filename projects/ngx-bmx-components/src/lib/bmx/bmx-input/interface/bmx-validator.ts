import {AbstractControl, ValidationErrors} from "@angular/forms";

export interface BmxValidator {
	errorCode: string;
	message: string;
	validator: ((control: AbstractControl) => (ValidationErrors | null));
}
