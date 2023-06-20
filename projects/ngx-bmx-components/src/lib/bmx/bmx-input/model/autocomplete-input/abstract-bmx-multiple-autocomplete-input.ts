import {BmxAutocompleteInput} from "../../interface/bmx-autocomplete-input";
import {BmxInputType} from "../../interface/bmx-input-type";
import {BmxAutocompleteExtendedItem} from "../../interface/bmx-autocomplete-extended-item";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxAutocompleteItem} from "../../interface/bmx-autocomplete-item";
import {BmxValidator} from "../../interface/bmx-validator";

export class AbstractBmxMultipleAutocompleteInput implements BmxAutocompleteInput{

	public inputType: BmxInputType = BmxInputType.MULTIPLE_AUTOCOMPLETE;
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
		this.entries = AbstractBmxMultipleAutocompleteInput.mapToExtendedItems(entries);
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
