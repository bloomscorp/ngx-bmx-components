import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {AbstractBmxContentInput} from "./abstract-bmx-content-input";
import {BmxContentInput} from "../../interface/bmx-content-input";

export class BmxTextInput extends AbstractBmxContentInput {

	public constructor(
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
		placeholder: string,
		readOnly: boolean = false,
		validators: BmxValidator[] = []
	) {
		super(
			appearance,
			disabled,
			'text',
			label,
			hint,
			name,
			placeholder,
			readOnly,
			validators
		);
	}

	public static getInstance(
		label: string,
		hint: string,
		name: string,
		placeholder: string,
		validators: BmxValidator[] = []
	): BmxContentInput {
		return new BmxTextInput(
			'outline',
			false,
			label,
			hint,
			name,
			placeholder,
			false,
			validators
		);
	}
}
