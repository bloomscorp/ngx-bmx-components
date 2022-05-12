import {BmxValidator} from "./bmx-validator";
import {BmxInputType} from "./bmx-input-type";
import {BmxElement} from "../../interface/bmx-element";
import {BmxInputValue} from "./bmx-input-element-types";

export interface BmxInput extends BmxElement {
	label: string;
	readOnly: boolean;
	disabled: boolean;
	placeholder: string;
	name: string;
	hint: string;
	validators: BmxValidator[];
	inputType: BmxInputType;
	value: BmxInputValue;
}
