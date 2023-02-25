import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {FormControl} from "@angular/forms";
import {BmxSelectInput} from "../interface/bmx-select-input";
import {BmxSelectInputExtendedItem} from "../interface/bmx-select-input-extended-item";
import {BmxSelectInputItem} from "../interface/bmx-select-input-item";

@Component({
	selector: 'bmx-select-input',
	templateUrl: './bmx-select-input.component.html',
	styleUrls: ['./bmx-select-input.component.scss']
})
export class BmxSelectInputComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: FormControl = {} as FormControl;

	public data: BmxSelectInput = {} as BmxSelectInput;

	public value: any = "";

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxSelectInput>this.bmxData;
		this.setValue();
		this.formControl.valueChanges.subscribe(() => {
			this.setValue()
		})
	}

	public valueChanges(event: EventEmitter<string | number>): void {
		this.data.onValueChange(event);
	}

	public setValue(): void {
		setTimeout(() => {
			if (this.data.type === 'single')
			{
				this.value = "value" in this.data.value ? this.data.value.value : "";
			}
			if (this.data.type === 'multiple') {
				let values = <BmxSelectInputItem[]>this.data.value;
				this.value = values.map(value => value.value);
			}
			this.formControl.setValue(this.value)

		}, 0);
	}

	public trackItems(index: number, item: BmxSelectInputExtendedItem): number {
		return item.id;
	}
}
