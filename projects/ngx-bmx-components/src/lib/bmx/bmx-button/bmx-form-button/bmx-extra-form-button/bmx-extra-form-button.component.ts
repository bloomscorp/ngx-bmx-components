import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {FormGroup} from "@angular/forms";
import {BmxButtonElement} from "../../interface/bmx-button-element-types";

@Component({
	selector: 'bmx-extra-form-button',
	templateUrl: './bmx-extra-form-button.component.html',
	styleUrls: ['./bmx-extra-form-button.component.scss']
})
export class BmxExtraFormButtonComponent implements OnInit {

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
