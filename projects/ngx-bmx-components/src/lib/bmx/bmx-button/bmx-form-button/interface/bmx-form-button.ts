import {BmxElement} from "../../../interface/bmx-element";

export interface BmxFormButton extends BmxElement {
	title: string;
	onClick: () => void;
}
