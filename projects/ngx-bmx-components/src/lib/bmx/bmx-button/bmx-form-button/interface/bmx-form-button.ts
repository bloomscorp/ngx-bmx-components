import {BmxElement} from "../../../interface/bmx-element";
import {BmxFormButtonType} from "./bmx-form-button-type";

export interface BmxFormButton extends BmxElement {
	title: string;
	onClick: () => void;
	inputType: BmxFormButtonType;
}
