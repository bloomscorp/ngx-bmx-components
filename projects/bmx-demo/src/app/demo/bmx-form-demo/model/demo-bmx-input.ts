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

	public static genderSelect: BmxSelectInput = BmxSingleSelectInput.getInstance(
		'Gender',
		'Select your gender',
		'gender',
		{
			title: 'Male',
			value: 'male'
		},
		'Male | Female | Other',
		DemoBmxDropdown.genderDropdown
	);

	public static codeAutocomplete: BmxAutocompleteInput = BmxSimpleAutocompleteInput.getInstance(
		'code',
		'Enter a country code',
		'code',
		{
			title: '+91',
			description: 'India\'s Country Code',
			value: '+91'
		},
		'+91 | +1 | +44',
		[
			{
				image: 'https://s3-ap-south-1.amazonaws.com/delta-faucet-india-cdn/pendant/57190-CZ/images/000.jpg',
				title: '+91',
				description: 'India\'s Country Code',
				value: '+91'
			},
			{
				image: 'https://s3-ap-south-1.amazonaws.com/delta-faucet-india-cdn/pendant/57190-CZ/images/000.jpg',
				title: '+1',
				description: 'US\'s Country Code',
				value: '+1'
			},
			{
				image: 'https://s3-ap-south-1.amazonaws.com/delta-faucet-india-cdn/pendant/57190-CZ/images/000.jpg',
				title: '+44',
				description: 'UK\'s country code',
				value: '+44'
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
