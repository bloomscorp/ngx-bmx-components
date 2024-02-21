import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {UntypedFormControl} from "@angular/forms";
import {BmxSelectInput} from "../interface/bmx-select-input";
import {BmxSelectInputExtendedItem} from "../interface/bmx-select-input-extended-item";
import {BmxSelectInputItem} from "../interface/bmx-select-input-item";
import {MatSelectChange} from "@angular/material/select";

@Component({
	selector: 'bmx-select-input',
	templateUrl: './bmx-select-input.component.html',
	styleUrls: ['./bmx-select-input.component.scss']
})
export class BmxSelectInputComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: UntypedFormControl = {} as UntypedFormControl;

	public data: BmxSelectInput = {} as BmxSelectInput;

	public value: any = "";

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxSelectInput>this.bmxData;
		this.setValue();
		// this.formControl.valueChanges.subscribe((value)=> {
		// 	this.setValue()
		// })
	}

	public selectionChanges(event: MatSelectChange): void {
		this.data.onValueChange(event.value);
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

		}, 0);
	}

	public trackItems(index: number, item: BmxSelectInputExtendedItem): number {
		return item.id;
	}
}
