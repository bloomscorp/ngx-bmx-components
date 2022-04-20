import {BmxInput} from "./bmx-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxContentInputType} from "./bmx-input-element-types";

export interface BmxContentInput extends BmxInput {
	appearance: MatFormFieldAppearance;
	type: BmxContentInputType;
}
