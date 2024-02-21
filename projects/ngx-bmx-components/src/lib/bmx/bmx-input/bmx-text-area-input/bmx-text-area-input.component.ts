import {Component, Input, OnInit} from '@angular/core';
import {BmxTextAreaInput} from "../interface/bmx-text-area-input";
import {UntypedFormControl} from "@angular/forms";
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {BmxMaxLengthValidator} from "../model/validators/bmx-max-length-validator";

@Component({
  selector: 'bmx-text-area-input',
  templateUrl: './bmx-text-area-input.component.html',
  styleUrls: ['./bmx-text-area-input.component.scss']
})
export class BmxTextAreaInputComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: UntypedFormControl = {} as UntypedFormControl;

	public data: BmxTextAreaInput = {} as BmxTextAreaInput;
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
		this.data = <BmxTextAreaInput>this.bmxData;
		setTimeout(() => this._init(), 0);
	}
}
