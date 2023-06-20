import {BmxInput} from "./bmx-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";

export interface BmxRichtextInput extends BmxInput {
	appearance: MatFormFieldAppearance;
	value: string;
	config?: {
		[key: string]: any;
	}
}
