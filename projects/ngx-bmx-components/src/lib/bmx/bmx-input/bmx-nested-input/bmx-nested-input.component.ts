import {Component, Input, OnInit} from '@angular/core';
import {BmxImageInputElement} from "../interface/bmx-input-element-types";
import {UntypedFormControl} from "@angular/forms";

@Component({
  selector: 'bmx-nested-input',
  templateUrl: './bmx-nested-input.component.html',
  styleUrls: ['./bmx-nested-input.component.scss']
})
export class BmxNestedInputComponent implements OnInit {

	@Input()
	public data: BmxImageInputElement = {} as BmxImageInputElement;

	@Input()
	public formControl: UntypedFormControl = {} as UntypedFormControl;

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
