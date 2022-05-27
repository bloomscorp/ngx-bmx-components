import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {FormGroup} from "@angular/forms";

@Component({
	selector: 'bmx-extra-form-button',
	templateUrl: './bmx-extra-form-button.component.html',
	styleUrls: ['./bmx-extra-form-button.component.scss']
})
export class BmxExtraFormButtonComponent implements OnInit {

	@Input()
	public data: BmxFormButton = {} as BmxFormButton;

	@Input()
	public formGroup: FormGroup = {} as FormGroup;

	constructor() {
	}

	ngOnInit(): void {
	}

}
