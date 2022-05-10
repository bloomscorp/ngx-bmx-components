import {TupleBmxFormData} from "ngx-bmx-components";
import {DemoBmxInput} from "./demo-bmx-input";
import {BmxFormData} from "ngx-bmx-components/lib/bmx/bmx-form/interface/bmx-form-data";

export class DemoBmxFormData {

	public static contactForm: BmxFormData = new TupleBmxFormData(
		'Contact Form',
		'This is a demo contact form',
		[
			DemoBmxInput.nameInput,
			DemoBmxInput.contactInput,
			DemoBmxInput.genderSelect,
			DemoBmxInput.textAreaInput
		]
	);
}
