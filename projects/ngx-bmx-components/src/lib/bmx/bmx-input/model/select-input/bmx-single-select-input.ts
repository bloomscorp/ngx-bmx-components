import {AbstractBmxSelectInput} from "./abstract-bmx-select-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxSelectInput} from "../../interface/bmx-select-input";
import {BmxSelectInputExtendedItem} from "../../interface/bmx-select-input-extended-item";
import {BmxSelectInputItem} from "../../interface/bmx-select-input-item";

export class BmxSingleSelectInput extends AbstractBmxSelectInput {

	public constructor(
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
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
			placeholder,
			false,
			entries,
			validators
		);
	}
}
