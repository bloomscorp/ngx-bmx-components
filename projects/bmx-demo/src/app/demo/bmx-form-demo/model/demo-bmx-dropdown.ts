import {BmxSelectInputItem} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-select-input-item";

export class DemoBmxDropdown {

	public static genderDropdown: BmxSelectInputItem[] = [{
		title: 'Male',
		value: 'male'
	}, {
		title: 'Female',
		value: 'female'
	}, {
		title: 'Other',
		value: 'other'
	}];

	public static toppingsDropdown: BmxSelectInputItem[] = [{
		title: 'Mushroom',
		value: 'MUSHROOM'
	}, {
		title: 'Peperoni',
		value: 'PEPERONI'
	}, {
		title: 'Onion',
		value: 'ONION'
	}];
}
