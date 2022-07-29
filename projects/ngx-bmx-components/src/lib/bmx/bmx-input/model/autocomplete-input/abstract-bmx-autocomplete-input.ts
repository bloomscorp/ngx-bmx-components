import {BmxAutocompleteInput} from "../../interface/bmx-autocomplete-input";
import {BmxInputType} from "../../interface/bmx-input-type";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxAutocompleteItem} from "../../interface/bmx-autocomplete-item";
import {BmxAutocompleteExtendedItem} from "../../interface/bmx-autocomplete-extended-item";

export class AbstractBmxAutocompleteInput implements BmxAutocompleteInput{

	public inputType: BmxInputType = BmxInputType.AUTOCOMPLETE;
	public entries: BmxAutocompleteExtendedItem[] = [];

	protected constructor(
		public appearance: MatFormFieldAppearance = 'outline',
		public disabled: boolean = false,
		public label: string,
		public hint: string,
		public name: string,
		public value: BmxAutocompleteItem,
		public placeholder: string,
		public readOnly: boolean = false,
		entries: BmxAutocompleteItem[] = [],
		public validators: BmxValidator[] = []
	) {
		this.entries = AbstractBmxAutocompleteInput.mapToExtendedItems(entries);
	}

	public static mapToExtendedItems(entries: BmxAutocompleteItem[]): BmxAutocompleteExtendedItem[] {

		const extendedEntries: BmxAutocompleteExtendedItem[] = [];

		entries.forEach((entry: BmxAutocompleteItem, index: number) => {
			extendedEntries.push({
				id: index,
				image: entry.image,
				title: entry.title,
				value: entry.value,
				description: entry.description
			});
		});

		return extendedEntries;
	}
}
