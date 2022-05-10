import {BmxFormData} from "../../../../../../../dist/ngx-bmx-components/lib/bmx/bmx-form/interface/bmx-form-data";
import {TupleBmxFormData} from "ngx-bmx-components";
import {DemoBmxInput} from "./demo-bmx-input";

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
