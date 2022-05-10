import {BmxContentInput} from "../../../../../../../dist/ngx-bmx-components/lib/bmx/bmx-input/interface/bmx-content-input";
import {BmxContactInput, BmxSimpleTextAreaInput, BmxSingleSelectInput, BmxTextInput} from "ngx-bmx-components";
import {BmxTextAreaInput} from "../../../../../../../dist/ngx-bmx-components/lib/bmx/bmx-input/interface/bmx-text-area-input";
import {BmxSelectInput} from "../../../../../../../dist/ngx-bmx-components/lib/bmx/bmx-input/interface/bmx-select-input";
import {DemoBmxValidator} from "./demo-bmx-validator";
import {DemoBmxDropdown} from "./demo-bmx-dropdown";

export class DemoBmxInput {

	public static nameInput: BmxContentInput = BmxTextInput.getInstance(
		'Name',
		'Enter your name',
		'name',
		'Joe Billy',
		[
			DemoBmxValidator.required,
			DemoBmxValidator.nameMinLength
		]
	);

	public static contactInput: BmxContentInput = BmxContactInput.getInstance(
		'Phone Number',
		'Enter your phone number',
		'phone',
		'+919831126234'
	);

	public static genderSelect: BmxSelectInput = BmxSingleSelectInput.getInstance(
		'Gender',
		'Select your gender',
		'gender',
		'Male | Female | Other',
		DemoBmxDropdown.genderDropdown
	);

	public static textAreaInput: BmxTextAreaInput = BmxSimpleTextAreaInput.getInstance(
		'Text Area',
		'',
		'text-area',
		'Enter some text',
		[
			DemoBmxValidator.nameMinLength
		],
		4
	);
}
