import {Component, Input, OnInit} from '@angular/core';
import {BmxContentInput} from "../interface/bmx-content-input";
import {FormControl} from "@angular/forms";
import {BmxInputElement} from "../interface/bmx-input-element-types";

@Component({
	selector: 'bmx-input',
	templateUrl: './bmx-input.component.html',
	styleUrls: ['./bmx-input.component.scss']
})
export class BmxInputComponent implements OnInit {

	@Input()
	public data: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: FormControl = {} as FormControl;

	constructor() {
	}

	ngOnInit(): void {
		this.formControl.addValidators(
			this.data.validators.map(
				validator => validator.validator
			)
		);
	}

	public castToContentInput(): BmxInputElement {
		return <BmxContentInput>this.data;
	}
}
