import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";
import {FormGroup} from "@angular/forms";

@Component({
	selector: 'bmx-danger-form-button',
	templateUrl: './bmx-danger-form-button.component.html',
	styleUrls: ['./bmx-danger-form-button.component.scss']
})
export class BmxDangerFormButtonComponent implements OnInit {

	@Input()
	public data: BmxFormButton = {} as BmxFormButton;

	@Input()
	public formGroup: FormGroup = {} as FormGroup;

	constructor() {
	}

	ngOnInit(): void {
	}

}
