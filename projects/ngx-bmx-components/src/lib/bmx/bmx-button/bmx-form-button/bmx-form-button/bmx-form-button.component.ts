import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {UntypedFormGroup} from "@angular/forms";
import {BmxButtonElement} from "../../interface/bmx-button-element-types";

@Component({
	selector: 'bmx-form-button',
	templateUrl: './bmx-form-button.component.html',
	styleUrls: ['./bmx-form-button.component.scss']
})
export class BmxFormButtonComponent implements OnInit {

	@Input()
	public data: BmxButtonElement = {} as BmxFormButton;

	@Input()
	public formGroup: UntypedFormGroup = {} as UntypedFormGroup;

	public buttonData: BmxFormButton = {} as BmxFormButton;

	constructor() {
	}

	ngOnInit(): void {
		this.buttonData = <BmxFormButton>this.data;
	}

}
