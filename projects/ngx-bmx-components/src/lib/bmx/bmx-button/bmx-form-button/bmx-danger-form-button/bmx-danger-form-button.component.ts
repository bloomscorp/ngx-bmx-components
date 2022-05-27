import {Component, Input, OnInit} from '@angular/core';
import {BmxFormButton} from "../interface/bmx-form-button";

@Component({
	selector: 'bmx-danger-form-button',
	templateUrl: './bmx-danger-form-button.component.html',
	styleUrls: ['./bmx-danger-form-button.component.scss']
})
export class BmxDangerFormButtonComponent implements OnInit {

	@Input()
	public data: BmxFormButton = {} as BmxFormButton;

	constructor() {
	}

	ngOnInit(): void {
	}

}
