import {BmxInput} from "./bmx-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxAutocompleteExtendedItem} from "./bmx-autocomplete-extended-item";
import {BmxAutocompleteItem} from "./bmx-autocomplete-item";

export interface BmxAutocompleteInput extends BmxInput {
	appearance: MatFormFieldAppearance;
	entries: BmxAutocompleteExtendedItem[];
	value: BmxAutocompleteItem;
}
