import {AbstractBmxSelectInput} from "./abstract-bmx-select-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxSelectInput} from "../../interface/bmx-select-input";
import {BmxSelectInputItem} from "../../interface/bmx-select-input-item";
import {EventEmitter} from "@angular/core";

export class BmxSingleSelectInput extends AbstractBmxSelectInput {

	public constructor(
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
		value: BmxSelectInputItem,
		onValueChange: (event: EventEmitter<string | number>) => void,
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
			onValueChange,
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
		value: BmxSelectInputItem = {
			title: '',
			value: ''
		},
		placeholder: string,
		entries: BmxSelectInputItem[],
		validators: BmxValidator[] = [],
		onValueChange: (event: EventEmitter<string | number>) => void = AbstractBmxSelectInput.DEFAULT_ON_VALUE_CHANGE
	): BmxSelectInput {
		return new BmxSingleSelectInput(
			'outline',
			false,
			label,
			hint,
			name,
			value,
			onValueChange,
			placeholder,
			false,
			entries,
			validators
		);
	}
}
