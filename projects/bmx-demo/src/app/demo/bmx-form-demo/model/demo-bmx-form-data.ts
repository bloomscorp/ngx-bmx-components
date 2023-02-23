import {TupleBmxFormData} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/model/tuple-bmx-form-data";
import {DemoBmxInput} from "./demo-bmx-input";
import {BmxFormData} from '../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/interface/bmx-form-data';
import {FormGroup} from "@angular/forms";
import {DemoBmxFromButton} from "./demo-bmx-from-button";
import {SingleBmxForm} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/model/single-bmx-form";

export class DemoBmxFormData {

	public static contactForm: BmxFormData = new TupleBmxFormData(
		'Contact Form',
		'This is a demo contact form',
		[
			DemoBmxInput.nameInput,
			DemoBmxInput.contactInput,
			DemoBmxInput.dateInput,
			DemoBmxInput.genderSelect,
			DemoBmxInput.toppingsSelect,
			DemoBmxInput.codeAutocomplete,
			DemoBmxInput.textAreaInput,
			DemoBmxInput.imageInput,
			DemoBmxInput.passwordInput
		],
		DemoBmxFromButton.contactFormButton
	);

	public static glassForm: BmxFormData = new SingleBmxForm(
		'Contact Form',
		'This is a demo contact form',
		[
			DemoBmxInput.nameInput,
			DemoBmxInput.contactInput,
			DemoBmxInput.dateContentInput,
			DemoBmxInput.passwordInput
		],
		DemoBmxFromButton.contactFormButton
	);
}
