import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {FormControl} from "@angular/forms";
import {BmxSelectInput} from "../interface/bmx-select-input";
import {BmxSelectInputExtendedItem} from "../interface/bmx-select-input-extended-item";

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

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxSelectInput>this.bmxData;
		this.formControl.setValue(this.data.value.value);
	}

	// TODO: open this to API access
	public valueChanges(event: EventEmitter<string | number>): void {
		console.log('changes');
		console.log(event);
	}

	public trackItems(index: number, item: BmxSelectInputExtendedItem): number {
		return item.id;
	}
}
