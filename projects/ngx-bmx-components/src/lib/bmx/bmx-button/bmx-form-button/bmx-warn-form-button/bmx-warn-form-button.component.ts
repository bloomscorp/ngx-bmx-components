import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {FormGroup} from "@angular/forms";
import {BmxButtonElement} from "../../interface/bmx-button-element-types";

@Component({
	selector: 'bmx-warn-form-button',
	templateUrl: './bmx-warn-form-button.component.html',
	styleUrls: ['./bmx-warn-form-button.component.scss']
})
export class BmxWarnFormButtonComponent implements OnInit {

	@Input()
	public data: BmxButtonElement = {} as BmxFormButton;

	@Input()
	public formGroup: FormGroup = {} as FormGroup;

	public buttonData: BmxFormButton = {} as BmxFormButton;

	constructor() {
	}

	ngOnInit(): void {
		this.buttonData = <BmxFormButton>this.data;
	}
}
