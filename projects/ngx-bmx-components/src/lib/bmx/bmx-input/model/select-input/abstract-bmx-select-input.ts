import {BmxSelectInput} from "../../interface/bmx-select-input";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {BmxValidator} from "../../interface/bmx-validator";
import {BmxInputType} from "../../interface/bmx-input-type";
import {BmxSelectInputType} from "../../interface/bmx-input-element-types";
import {BmxSelectInputExtendedItem} from "../../interface/bmx-select-input-extended-item";
import {BmxSelectInputItem} from "../../interface/bmx-select-input-item";
import {EventEmitter} from "@angular/core";

export class AbstractBmxSelectInput implements BmxSelectInput {

	public static readonly DEFAULT_ON_VALUE_CHANGE: (event: EventEmitter<string | number>) => void = (event: EventEmitter<string | number>) => {
		console.log(`value has changed to ${event}`);
	};

	public inputType: BmxInputType = BmxInputType.SELECT;
	public entries: BmxSelectInputExtendedItem[] = [];

	protected constructor(
		public appearance: MatFormFieldAppearance = 'outline',
		public disabled: boolean = false,
		public type: BmxSelectInputType,
		public label: string,
		public hint: string,
		public name: string,
		public value: BmxSelectInputItem | BmxSelectInputItem[],
		public onValueChange: (event: EventEmitter<string | number>) => void,
		public placeholder: string,
		public readOnly: boolean = false,
		entries: BmxSelectInputItem[] = [],
		public validators: BmxValidator[] = []
	) {
		this.entries = AbstractBmxSelectInput.mapToExtendedItems(entries);
	}

	public static mapToExtendedItems(entries: BmxSelectInputItem[]): BmxSelectInputExtendedItem[] {

		const extendedEntries: BmxSelectInputExtendedItem[] = [];

		entries.forEach((entry: BmxSelectInputItem, index: number) => {
			extendedEntries.push({
				id: index,
				title: entry.title,
				value: entry.value,
				disabled: entry.disabled ? entry.disabled : false
			});
		});

		return extendedEntries;
	}
}
