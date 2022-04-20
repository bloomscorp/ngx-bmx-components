import {BmxInput} from "./bmx-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxSelectInputType} from "./bmx-input-element-types";
import {BmxSelectInputExtendedItem} from "./bmx-select-input-extended-item";

export interface BmxSelectInput extends BmxInput {
	appearance: MatFormFieldAppearance;
	type: BmxSelectInputType;
	entries: BmxSelectInputExtendedItem[];
}
