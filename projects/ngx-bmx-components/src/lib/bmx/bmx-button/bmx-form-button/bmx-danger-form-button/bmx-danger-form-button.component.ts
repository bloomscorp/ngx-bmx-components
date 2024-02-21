import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {UntypedFormGroup} from "@angular/forms";
import {BmxButtonElement} from "../../interface/bmx-button-element-types";

@Component({
	selector: 'bmx-danger-form-button',
	templateUrl: './bmx-danger-form-button.component.html',
	styleUrls: ['./bmx-danger-form-button.component.scss']
})
export class BmxDangerFormButtonComponent implements OnInit {

	@Input()
	public data: BmxFormButton = {} as BmxFormButton;

	@Input()
	public formGroup: UntypedFormGroup = {} as UntypedFormGroup;

	constructor() {
	}

	ngOnInit(): void {
	}
}
