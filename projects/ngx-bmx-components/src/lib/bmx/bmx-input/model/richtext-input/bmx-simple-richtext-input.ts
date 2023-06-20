import {AbstractBmxRichtextInput} from "./abstract-bmx-richtext-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";

export class BmxSimpleRichtextInput extends AbstractBmxRichtextInput {

	public constructor (
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
		value: string,
		placeholder: string,
		readOnly: boolean = false,
		validators: BmxValidator[] = [],
		config?: {
			[key: string]: any
		}
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
			config
		);
	}

	public static getInstance(
		label: string,
		hint: string,
		name: string,
		value: string = '',
		placeholder: string,
		validators: BmxValidator[] = [],
		config: any = undefined
	): BmxSimpleRichtextInput {

		return new BmxSimpleRichtextInput(
			'outline',
			false,
			label,
			hint,
			name,
			value,
			placeholder,
			false,
			validators,
			config
		);
	}
}
