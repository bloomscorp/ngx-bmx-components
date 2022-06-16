import {BmxElement} from "../../../interface/bmx-element";
import {BmxFormButtonType} from "./bmx-form-button-type";
import {FormGroup} from "@angular/forms";

export interface BmxFormButton extends BmxElement {
	title: string;
	onSubmit: (formGroup: FormGroup) => void;
	inputType: BmxFormButtonType;
	validateBeforeSubmit: boolean;
}
