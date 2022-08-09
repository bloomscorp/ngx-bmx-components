import {AbstractBmxDatepickerInput} from "./abstract-bmx-datepicker-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";

export class BmxDatepickerInput extends AbstractBmxDatepickerInput {

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
		placeholder: string,
		validators: BmxValidator[] = []
	): BmxDatepickerInput {
		return new BmxDatepickerInput(
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
