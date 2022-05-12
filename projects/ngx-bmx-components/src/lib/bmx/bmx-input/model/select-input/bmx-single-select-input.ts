import {AbstractBmxSelectInput} from "./abstract-bmx-select-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxSelectInput} from "../../interface/bmx-select-input";
import {BmxSelectInputItem} from "../../interface/bmx-select-input-item";

export class BmxSingleSelectInput extends AbstractBmxSelectInput {

	public constructor(
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
		value: string | number,
		placeholder: string,
		readOnly: boolean = false,
		entries: BmxSelectInputItem[],
		validators: BmxValidator[] = []
	) {
		super(
			appearance,
			disabled,
			'single',
			label,
			hint,
			name,
			value,
			placeholder,
			readOnly,
			entries,
			validators
		);
	}

	public static getInstance(
		label: string,
		hint: string,
		name: string,
		value: string | number = '',
		placeholder: string,
		entries: BmxSelectInputItem[],
		validators: BmxValidator[] = []
	): BmxSelectInput {
		return new BmxSingleSelectInput(
			'outline',
			false,
			label,
			hint,
			name,
			value,
			placeholder,
			false,
			entries,
			validators
		);
	}
}
