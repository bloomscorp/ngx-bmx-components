import {Component, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {UntypedFormControl} from "@angular/forms";
import {BmxContentInput} from "../interface/bmx-content-input";
import {BmxMaxLengthValidator} from "../model/validators/bmx-max-length-validator";

@Component({
	selector: 'bmx-content-input',
	templateUrl: './bmx-content-input.component.html',
	styleUrls: ['./bmx-content-input.component.scss']
})
export class BmxContentInputComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: UntypedFormControl = {} as UntypedFormControl;

	public data: BmxContentInput = {} as BmxContentInput;

	public showCharacterCount: boolean = false;
	public characterCount: number = 0;

	constructor() {
	}

	private _init(): void {

		this.formControl.setValue(this.data.value);

		this.data.validators.forEach(validator => {
			if (validator.errorCode === 'maxlength') {
				this.showCharacterCount = (<BmxMaxLengthValidator>validator).showCharacterCount;
				this.characterCount = (<BmxMaxLengthValidator>validator).maxlength;
			}
		});
	}

	ngOnInit(): void {
		this.data = <BmxContentInput>this.bmxData;
		setTimeout(() => this._init(), 0);
	}
}
