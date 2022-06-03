import {BmxInput} from "./bmx-input";
import {BmxImageInputElement, BmxInputElement} from "./bmx-input-element-types";

export interface BmxImageInput extends BmxInput {
	src: string;
	alt: string;
	width: number;
	height: number;
	classList: string[];
	bmxInput: BmxImageInputElement;
}
