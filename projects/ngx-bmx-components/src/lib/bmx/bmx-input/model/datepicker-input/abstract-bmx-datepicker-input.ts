import {BmxDatepickerInput} from "../../interface/bmx-datepicker-input";
import {BmxInputType} from "../../interface/bmx-input-type";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";

export class AbstractBmxDatepickerInput implements BmxDatepickerInput {

	public inputType: BmxInputType = BmxInputType.DATEPICKER;

	protected constructor(
		public appearance: MatFormFieldAppearance = 'outline',
		public disabled: boolean = false,
		public label: string,
		public hint: string,
		public name: string,
		public value: string,
		public placeholder: string,
		public readOnly: boolean = false,
		public validators: BmxValidator[] = [],
		public minDate: Date,
		public maxDate: Date
	) {
	}
}
