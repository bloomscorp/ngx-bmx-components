import {BmxContentInput} from '../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-content-input';
import {BmxTextAreaInput} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-text-area-input";
import {BmxSelectInput} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-select-input";
import {DemoBmxValidator} from "./demo-bmx-validator";
import {DemoBmxDropdown} from "./demo-bmx-dropdown";
import {BmxTextInput} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/content-input/bmx-text-input";
import {BmxContactInput} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/content-input/bmx-contact-input";
import {BmxSingleSelectInput} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/select-input/bmx-single-select-input";
import {BmxSimpleTextAreaInput} from '../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/text-area-input/bmx-simple-text-area-input';
import {BmxSimpleImageInput} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/image-input/bmx-simple-image-input";
import {BmxImageInput} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-image-input";
import {BmxRequiredValidator} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/validators/bmx-required-validator";
import {
	BmxAutocompleteInput
} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-autocomplete-input";
import {
	BmxSimpleAutocompleteInput
} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/autocomplete-input/bmx-simple-autocomplete-input";
import {
	BmxDatepickerInput
} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-datepicker-input";
import {
	BmxDefaultDatepickerInput
} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/datepicker-input/bmx-default-datepicker-input";
import {
	BmxPasswordInput
} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/content-input/bmx-password-input";
import {
	BmxDateInput
} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/content-input/bmx-date-input";
import {
	BmxMultipleSelectInput
} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/select-input/bmx-multiple-select-input";
import {EventEmitter} from "@angular/core";

export class DemoBmxInput {

	public static nameInput: BmxContentInput = BmxTextInput.getInstance(
		'Name',
		'Enter your name',
		'name',
		'Sajib Acharya',
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
		'',
		'+919831126234'
	);

	public static passwordInput: BmxContentInput = BmxPasswordInput.getInstance(
		'Password',
		'Enter your password',
		'password',
		'',
		'dsd87fhsgfysg'
	);

	public static dateContentInput: BmxContentInput = BmxDateInput.getInstance(
		'Date',
		'Choose a date',
		'pdateassword',
		{} as Date,
		'13/08/99',
		[
			new BmxRequiredValidator()
		]
	);

	public static dateInput: BmxDatepickerInput = BmxDefaultDatepickerInput.getInstance(
		'Date Picker',
		'Enter your date of birth',
		'dob',
		'',
		'13/08/99',
		[],
		{} as Date,
		new Date()
	);

	public static genderSelect: BmxSelectInput = BmxSingleSelectInput.getInstance(
		'Gender',
		'Select your gender',
		'gender',
		{
			title: 'Male',
			value: 'male'
		},
		'Male | Female | Other',
		DemoBmxDropdown.genderDropdown,
		[],
		(event: EventEmitter<string | number>) => {
			DemoBmxInput.toppingsSelect.value = [
				{
					title: '',
					value: 'PEPERONI'
				},
			]
		}
	);

	public static toppingsSelect: BmxSelectInput = BmxMultipleSelectInput.getInstance(
		'Toppings',
		'Select your toppings',
		'toppings',
		[
			{
				title: '',
				value: 'MUSHROOM'
			},
			{
				title: '',
				value: 'ONION'
			},
		],
		'Pepperoni | Mushroom | Onion',
		DemoBmxDropdown.toppingsDropdown,
		[],
		(event: EventEmitter<string | number>) => {
			console.log(`${event}`);
		}
	);

	public static codeAutocomplete: BmxAutocompleteInput = BmxSimpleAutocompleteInput.getInstance(
		'Recommended Product',
		'Enter anything to get suggestions',
		'sku',
		{
			title: '',
			description: '',
			value: ''
		},
		'eg: 57190-BL',
		[
			{
				image: 'https://s3-ap-south-1.amazonaws.com/delta-faucet-india-cdn/pendant/57190-CZ/images/000.jpg',
				title: '57190-CZ',
				description: 'LED Pendant Product',
				value: '57190-CZ'
			},
			{
				image: 'https://s3-ap-south-1.amazonaws.com/delta-faucet-india-cdn/pendant/57190-BL/images/000.jpg',
				title: '57190-BL',
				description: 'LED Pendant Product with Matte Black finish',
				value: '57190-BL'
			},
			{
				image: 'https://s3-ap-south-1.amazonaws.com/delta-faucet-india-cdn/pendant/57190/images/000.jpg',
				title: '57190',
				description: 'LED Pendant Product with Polished Chrome finsih',
				value: '57190'
			}
		]
	);

	public static textAreaInput: BmxTextAreaInput = BmxSimpleTextAreaInput.getInstance(
		'Text Area',
		'',
		'text-area',
		'Lorem Ipsum',
		'Enter some text',
		[
			DemoBmxValidator.nameMinLength,
			new BmxRequiredValidator()
		],
		4
	);

	public static imageInput: BmxImageInput = BmxSimpleImageInput.getInstance(
		'Image Input',
		'https://s3-ap-south-1.amazonaws.com/delta-faucet-india-cdn/pendant/57190-CZ/images/000.jpg',
		'000.jpg',
		this.textAreaInput
	);
}
