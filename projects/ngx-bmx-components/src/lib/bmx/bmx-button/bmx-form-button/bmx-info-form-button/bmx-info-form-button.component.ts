import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";

@Component({
	selector: 'bmx-info-form-button',
	templateUrl: './bmx-info-form-button.component.html',
	styleUrls: ['./bmx-info-form-button.component.scss']
})
export class BmxInfoFormButtonComponent implements OnInit {

	@Input()
	public data: BmxFormButton = {} as BmxFormButton;

	constructor() {
	}

	ngOnInit(): void {
	}

}
