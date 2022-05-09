import {BmxInputType} from "./bmx-input-type";

export interface BmxImageInput {
	name: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	inputType: BmxInputType;
}
