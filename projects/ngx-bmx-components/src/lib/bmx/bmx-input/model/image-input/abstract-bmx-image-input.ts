import {BmxImageInput} from "../../interface/bmx-image-input";
import {BmxInputType} from "../../interface/bmx-input-type";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxImageInputElement} from "../../interface/bmx-input-element-types";

export class AbstractBmxImageInput implements BmxImageInput {

	public inputType: BmxInputType = BmxInputType.IMAGE;

	protected constructor(
		public name: string,
		public src: string,
		public alt: string,
		public width: number,
		public height: number,
		public classList: string[],
		public bmxInput: BmxImageInputElement,
		public disabled: boolean,
		public hint: string,
		public label: string,
		public placeholder: string,
		public readOnly: boolean,
		public validators: BmxValidator[]
	) {
	}

}
