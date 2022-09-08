import {AbstractBmxContentInput} from "./abstract-bmx-content-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxContentInput} from "../../interface/bmx-content-input";
import {BmxRequiredValidator} from "../validators/bmx-required-validator";
import {BmxMinLengthValidator} from "../validators/bmx-min-length-validator";

export class BmxPasswordInput extends AbstractBmxContentInput {

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
			'password',
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
		return new BmxPasswordInput(
			'outline',
			false,
			label,
			hint,
			name,
			value,
			placeholder,
			false,
			[
				new BmxRequiredValidator(),
				new BmxMinLengthValidator(6)
			]
		);
	}
}
