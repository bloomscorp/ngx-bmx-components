import {TupleBmxFormData} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/model/tuple-bmx-form-data";
import {DemoBmxInput} from "./demo-bmx-input";
import {BmxFormData} from '../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/interface/bmx-form-data';
import {FormGroup} from "@angular/forms";
import {DemoBmxFromButton} from "./demo-bmx-from-button";
import {SingleBmxForm} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/model/single-bmx-form";
import {BmxSelectInput} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-select-input";

export class DemoBmxFormData {

	public static updateToppings: (data: BmxFormData) => void = (data: BmxFormData) => {

		let toppings: BmxSelectInput = <BmxSelectInput>data.layoutContainers[2].group.inputItems[0].inputItem;

		console.log(toppings);
	};

	public static contactForm: BmxFormData = new TupleBmxFormData(
		'Contact Form',
		'This is a demo contact form',
		[
			DemoBmxInput.nameInput,
			DemoBmxInput.contactInput,
			DemoBmxInput.dateInput,
			DemoBmxInput.genderSelect,
			DemoBmxInput.toppingsSelect,
			DemoBmxInput.richTextInput,
			DemoBmxInput.codeAutocomplete,
			DemoBmxInput.textAreaInput,
			DemoBmxInput.imageInput,
			DemoBmxInput.passwordInput,
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
			DemoBmxInput.passwordInput,
			DemoBmxInput.richTextInput,
		],
		DemoBmxFromButton.contactFormButton
	);
}
