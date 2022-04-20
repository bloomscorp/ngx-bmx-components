import {AbstractBmxContentInput} from "./abstract-bmx-content-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxContentInput} from "../../interface/bmx-content-input";

export class BmxNumberInput extends AbstractBmxContentInput {

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
			'number',
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
		return new BmxNumberInput(
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
