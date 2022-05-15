import {AbstractBmxContentInput} from "./abstract-bmx-content-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxDefaultValidators} from "../validators/bmx-default-validators";
import {BmxContentInput} from "../../interface/bmx-content-input";


export class BmxEmailInput extends AbstractBmxContentInput {

	public constructor(
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
		value: string,
		placeholder: string,
		readOnly: boolean = false,
		validators: BmxValidator[] = []
	) {
		super(
			appearance,
			disabled,
			'email',
			label,
			hint,
			name,
			value,
			placeholder,
			readOnly,
			validators
		);
	}

	public static getInstance(
		label: string,
		hint: string,
		name: string,
		value: string = '',
		placeholder: string
	): BmxContentInput {
		return new BmxEmailInput(
			'outline',
			false,
			label,
			hint,
			name,
			value,
			placeholder,
			false,
			BmxDefaultValidators.emailValidator
		);
	}
}
