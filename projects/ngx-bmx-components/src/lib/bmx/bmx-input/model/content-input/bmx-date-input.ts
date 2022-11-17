import {AbstractBmxContentInput} from "./abstract-bmx-content-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxContentInput} from "../../interface/bmx-content-input";

export class BmxDateInput extends AbstractBmxContentInput {

	public constructor(
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
		value: Date,
		placeholder: string,
		readOnly: boolean = false,
		validators: BmxValidator[] = []
	) {
		super(
			appearance,
			disabled,
			'date',
			label,
			hint,
			name,
			String(value),
			placeholder,
			readOnly,
			validators
		);
	}

	public static getInstance(
		label: string,
		hint: string,
		name: string,
		value: Date,
		placeholder: string,
		validators: BmxValidator[] = []
	): BmxContentInput {
		return new BmxDateInput(
			'outline',
			false,
			label,
			hint,
			name,
			value,
			placeholder,
			false,
			validators
		);
	}
}
