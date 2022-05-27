import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {FormGroup} from "@angular/forms";

@Component({
	selector: 'bmx-form-button',
	templateUrl: './bmx-form-button.component.html',
	styleUrls: ['./bmx-form-button.component.scss']
})
export class BmxFormButtonComponent implements OnInit {

	@Input()
	public data: BmxFormButton = {} as BmxFormButton;

	@Input()
	public formGroup: FormGroup = {} as FormGroup;

	constructor() {
	}

	ngOnInit(): void {
	}

}
