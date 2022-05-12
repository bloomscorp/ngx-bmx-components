import {BmxTextAreaInput} from "../../interface/bmx-text-area-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxInputType} from "../../interface/bmx-input-type";

export class AbstractBmxTextAreaInput implements BmxTextAreaInput {

	public inputType: BmxInputType = BmxInputType.TEXT_AREA;

	protected constructor(
		public appearance: MatFormFieldAppearance = 'outline',
		public disabled: boolean = false,
		public label: string,
		public rows: number,
		public cols: number,
		public hint: string,
		public name: string,
		public value: string,
		public placeholder: string,
		public readOnly: boolean = false,
		public validators: BmxValidator[] = []
	) {
	}
}
