import {TupleBmxFormData} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/model/tuple-bmx-form-data";
import {DemoBmxInput} from "./demo-bmx-input";
import {BmxFormData} from '../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/interface/bmx-form-data';
import {FormGroup} from "@angular/forms";

export class DemoBmxFormData {

	// public static contactFormButton: BmxButtonLayoutContainer = {};

	public static contactForm: BmxFormData = new TupleBmxFormData(
		'Contact Form',
		'This is a demo contact form',
		[
			DemoBmxInput.nameInput,
			DemoBmxInput.contactInput,
			DemoBmxInput.genderSelect,
			DemoBmxInput.textAreaInput,
			DemoBmxInput.imageInput
		],
		// DemoBmxFormData.contactFormButton,
		{
			title: 'submit',
			classList: [],
			onSubmit: (formGroup: FormGroup) => {
				console.log(formGroup);
			},
			validateBeforeSubmit: true
		}
	);
}
