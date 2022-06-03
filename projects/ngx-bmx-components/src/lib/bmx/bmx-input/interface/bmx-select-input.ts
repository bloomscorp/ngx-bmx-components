import {BmxInput} from "./bmx-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxSelectInputType} from "./bmx-input-element-types";
import {BmxSelectInputExtendedItem} from "./bmx-select-input-extended-item";
import {BmxSelectInputItem} from "./bmx-select-input-item";
import {EventEmitter} from "@angular/core";

export interface BmxSelectInput extends BmxInput {
	appearance: MatFormFieldAppearance;
	type: BmxSelectInputType;
	entries: BmxSelectInputExtendedItem[];
	value: BmxSelectInputItem;
	onValueChange: (event: EventEmitter<string | number>) => void;
}
