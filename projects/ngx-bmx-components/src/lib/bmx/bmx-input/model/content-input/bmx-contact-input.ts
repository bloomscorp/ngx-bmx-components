import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {AbstractBmxContentInput} from "./abstract-bmx-content-input";
import {BmxDefaultValidators} from "../validators/bmx-default-validators";
import {BmxContentInput} from "../../interface/bmx-content-input";

export class BmxContactInput extends AbstractBmxContentInput {

	public constructor(
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
		value: string,
		placeholder: string,
		readOnly: boolean = false,
		validators: BmxValidator[] = BmxDefaultValidators.contactValidator
	) {
		super(
			appearance,
			disabled,
			'tel',
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
	): BmxContentInput {
		return new BmxContactInput(
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
