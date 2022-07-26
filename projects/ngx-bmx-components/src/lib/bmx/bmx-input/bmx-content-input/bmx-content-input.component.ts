import {Component, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {FormControl} from "@angular/forms";
import {BmxContentInput} from "../interface/bmx-content-input";

@Component({
	selector: 'bmx-content-input',
	templateUrl: './bmx-content-input.component.html',
	styleUrls: ['./bmx-content-input.component.scss']
})
export class BmxContentInputComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: FormControl = {} as FormControl;

	public data: BmxContentInput = {} as BmxContentInput;

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxContentInput>this.bmxData;
		setTimeout(() => this.formControl.setValue(this.data.value), 0);
	}
}
