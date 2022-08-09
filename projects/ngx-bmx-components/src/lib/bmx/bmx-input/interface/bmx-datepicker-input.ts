import {BmxInput} from "./bmx-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";

export interface BmxDatepickerInput extends BmxInput {
	appearance: MatFormFieldAppearance;
	value: string;
	minDate?: Date;
	maxDate?: Date;
}
