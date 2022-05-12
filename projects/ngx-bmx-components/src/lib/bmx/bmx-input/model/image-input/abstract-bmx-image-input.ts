import {BmxImageInput} from "../../interface/bmx-image-input";
import {BmxInputType} from "../../interface/bmx-input-type";

export class AbstractBmxImageInput implements BmxImageInput {

	public inputType: BmxInputType = BmxInputType.IMAGE;

	protected constructor(
		public name: string,
		public src: string,
		public alt: string,
		public width: number,
		public height: number
	) {
	}
}
