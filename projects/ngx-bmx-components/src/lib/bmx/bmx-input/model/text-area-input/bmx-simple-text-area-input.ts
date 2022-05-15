import {AbstractBmxTextAreaInput} from "./abstract-bmx-text-area-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";

export class BmxSimpleTextAreaInput extends AbstractBmxTextAreaInput {
	public constructor (
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		rows: number,
		cols: number,
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
			rows,
			cols,
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
		validators: BmxValidator[] = [],
		rows: number = 1,
		cols: number = 50
	): BmxSimpleTextAreaInput {

		return new BmxSimpleTextAreaInput(
			'outline',
			false,
			label,
			rows,
			cols,
			hint,
			name,
			value,
			placeholder,
			false,
			validators
		);
	}
}
