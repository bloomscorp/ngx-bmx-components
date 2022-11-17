import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {BmxInputLayoutContainer} from "../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {BmxInputRowItem} from "../../bmx-layout/interface/input-layout/bmx-input-row-item";
import {BmxFormData} from "./bmx-form-data";

export interface BmxForm {

	formGroup: FormGroup;
	data: BmxFormData;

	controls: {
		[key: string]: AbstractControl;
	};

	getFormControl: (name: string) => FormControl;
	trackLayoutContainer: (index: number, container: BmxInputLayoutContainer) => number;
	trackInputElement: (index: number, item: BmxInputRowItem) => number;
}
