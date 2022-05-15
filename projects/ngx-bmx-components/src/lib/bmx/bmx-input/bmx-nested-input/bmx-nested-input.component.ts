import {Component, Input, OnInit} from '@angular/core';
import {BmxImageInputElement, BmxInputElement} from "../interface/bmx-input-element-types";
import {FormControl} from "@angular/forms";
import {BmxContentInput} from "../interface/bmx-content-input";

@Component({
  selector: 'bmx-nested-input',
  templateUrl: './bmx-nested-input.component.html',
  styleUrls: ['./bmx-nested-input.component.scss']
})
export class BmxNestedInputComponent implements OnInit {

	@Input()
	public data: BmxImageInputElement = {} as BmxImageInputElement;

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

}
