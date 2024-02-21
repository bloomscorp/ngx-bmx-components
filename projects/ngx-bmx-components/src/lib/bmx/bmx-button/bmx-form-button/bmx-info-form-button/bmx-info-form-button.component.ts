import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {UntypedFormGroup} from "@angular/forms";
import {BmxButtonElement} from "../../interface/bmx-button-element-types";

@Component({
	selector: 'bmx-info-form-button',
	templateUrl: './bmx-info-form-button.component.html',
	styleUrls: ['./bmx-info-form-button.component.scss']
})
export class BmxInfoFormButtonComponent implements OnInit {

	@Input()
	public data: BmxFormButton = {} as BmxFormButton;

	@Input()
	public formGroup: UntypedFormGroup = {} as UntypedFormGroup;

	constructor() {
	}

	ngOnInit(): void {
	}
}
