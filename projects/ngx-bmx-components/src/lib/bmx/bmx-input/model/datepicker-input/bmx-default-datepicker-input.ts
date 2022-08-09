import {AbstractBmxDatepickerInput} from "./abstract-bmx-datepicker-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";

export class BmxDefaultDatepickerInput extends AbstractBmxDatepickerInput {

	public constructor(
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
		value: string,
		placeholder: string,
		readOnly: boolean = false,
		validators: BmxValidator[] = [],
		minDate: Date = {} as Date,
		maxDate: Date = {} as Date
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
			validators,
			minDate,
			maxDate
		);
	}

	public static getInstance(
		label: string,
		hint: string,
		name: string,
		value: string = '',
		placeholder: string,
		validators: BmxValidator[] = [],
		minDate: Date = {} as Date,
		maxDate: Date = {} as Date
	): BmxDefaultDatepickerInput {
		return new BmxDefaultDatepickerInput(
			'outline',
			false,
			label,
			hint,
			name,
			value,
			placeholder,
			false,
			validators,
			minDate,
			maxDate
		);
	}
}
