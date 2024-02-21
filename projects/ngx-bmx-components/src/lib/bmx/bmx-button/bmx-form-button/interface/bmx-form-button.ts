import {BmxElement} from "../../../interface/bmx-element";
import {BmxFormButtonType} from "./bmx-form-button-type";
import {UntypedFormGroup} from "@angular/forms";

export interface BmxFormButton extends BmxElement {
	title: string;
	onSubmit: (formGroup: UntypedFormGroup) => void;
	inputType: BmxFormButtonType;
	validateBeforeSubmit: boolean;
}
