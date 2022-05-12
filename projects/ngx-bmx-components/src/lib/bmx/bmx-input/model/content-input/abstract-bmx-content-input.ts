import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxContentInput} from "../../interface/bmx-content-input";
import {BmxInputType} from "../../interface/bmx-input-type";
import {BmxContentInputType} from "../../interface/bmx-input-element-types";

export abstract class AbstractBmxContentInput implements BmxContentInput {

	public inputType: BmxInputType = BmxInputType.CONTENT;

	protected constructor(
		public appearance: MatFormFieldAppearance = 'outline',
		public disabled: boolean = false,
		public type: BmxContentInputType,
		public label: string,
		public hint: string,
		public name: string,
		public value: string,
		public placeholder: string,
		public readOnly: boolean = false,
		public validators: BmxValidator[] = []
	) {
	}
}
