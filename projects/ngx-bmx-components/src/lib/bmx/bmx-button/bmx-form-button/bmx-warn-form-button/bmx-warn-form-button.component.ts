import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {UntypedFormGroup} from "@angular/forms";
import {BmxButtonElement} from "../../interface/bmx-button-element-types";

@Component({
	selector: 'bmx-warn-form-button',
	templateUrl: './bmx-warn-form-button.component.html',
	styleUrls: ['./bmx-warn-form-button.component.scss']
})
export class BmxWarnFormButtonComponent implements OnInit {

	@Input()
	public data: BmxFormButton = {} as BmxFormButton;

	@Input()
	public formGroup: UntypedFormGroup = {} as UntypedFormGroup;

	constructor() {
	}

	ngOnInit(): void {
	}
}
