import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxInput} from "./bmx-input";

export interface BmxTextAreaInput extends BmxInput {
	appearance: MatFormFieldAppearance;
	rows: number;
	cols: number;
	value: string;
}
