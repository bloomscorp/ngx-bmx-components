import {BmxInputType} from "./bmx-input-type";
import {BmxInput} from "./bmx-input";

export interface BmxImageInput extends BmxInput {
	name: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	inputType: BmxInputType;
}
