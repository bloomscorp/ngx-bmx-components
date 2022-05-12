import {Component, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {FormControl} from "@angular/forms";
import {BmxImageInput} from "../interface/bmx-image-input";

@Component({
	selector: 'bmx-image-input',
	templateUrl: './bmx-image-input.component.html',
	styleUrls: ['./bmx-image-input.component.scss']
})
export class BmxImageInputComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: FormControl = {} as FormControl;

	public data: BmxImageInput = {} as BmxImageInput;

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxImageInput>this.bmxData;
	}

}
