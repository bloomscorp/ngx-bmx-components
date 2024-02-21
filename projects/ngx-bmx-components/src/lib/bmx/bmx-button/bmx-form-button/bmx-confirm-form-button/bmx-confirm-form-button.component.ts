import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {UntypedFormGroup} from "@angular/forms";
import {BmxButtonElement} from "../../interface/bmx-button-element-types";

@Component({
	selector: 'bmx-confirm-form-button',
	templateUrl: './bmx-confirm-form-button.component.html',
	styleUrls: ['./bmx-confirm-form-button.component.scss']
})
export class BmxConfirmFormButtonComponent implements OnInit {

	@Input()
	public data: BmxFormButton = {} as BmxFormButton;

	@Input()
	public formGroup: UntypedFormGroup = {} as UntypedFormGroup;

	constructor() {
	}

	ngOnInit(): void {
	}
}
