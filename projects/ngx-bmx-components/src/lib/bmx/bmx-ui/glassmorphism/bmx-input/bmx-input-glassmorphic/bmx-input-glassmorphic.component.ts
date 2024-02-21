import {Component, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../../../../bmx-input/interface/bmx-input-element-types";
import {UntypedFormControl} from "@angular/forms";

@Component({
	selector: 'bmx-input-glassmorphic',
	templateUrl: './bmx-input-glassmorphic.component.html',
	styleUrls: ['./bmx-input-glassmorphic.component.scss']
})
export class BmxInputGlassmorphicComponent implements OnInit {

	@Input()
	public data: BmxInputElement = {} as BmxInputElement;

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
