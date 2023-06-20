import {AbstractBmxAutocompleteInput} from "./abstract-bmx-autocomplete-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxAutocompleteItem} from "../../interface/bmx-autocomplete-item";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxAutocompleteInput} from "../../interface/bmx-autocomplete-input";
import {AbstractBmxMultipleAutocompleteInput} from "./abstract-bmx-multiple-autocomplete-input";

export class BmxMultipleAutocompleteInput extends AbstractBmxMultipleAutocompleteInput {

	public constructor(
		appearance: MatFormFieldAppearance = 'outline',
		disabled: boolean = false,
		label: string,
		hint: string,
		name: string,
		value: BmxAutocompleteItem,
		placeholder: string,
		readOnly: boolean = false,
		entries: BmxAutocompleteItem[],
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
			entries,
			validators
		);
	}

	public static getInstance(
		label: string,
		hint: string,
		name: string,
		value: BmxAutocompleteItem = {
			image: '',
			title: '',
			value: '',
			description: ''
		},
		placeholder: string,
		entries: BmxAutocompleteItem[],
		validators: BmxValidator[] = [],
	): BmxAutocompleteInput {
		return new BmxMultipleAutocompleteInput(
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
