import {Component, Input, OnInit} from '@angular/core';
import {BmxTextAreaInput} from "../interface/bmx-text-area-input";
import {FormControl} from "@angular/forms";
import {BmxInputElement} from "../interface/bmx-input-element-types";

@Component({
  selector: 'bmx-text-area-input',
  templateUrl: './bmx-text-area-input.component.html',
  styleUrls: ['./bmx-text-area-input.component.scss']
})
export class BmxTextAreaInputComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: FormControl = {} as FormControl;

	public data: BmxTextAreaInput = {} as BmxTextAreaInput;

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxTextAreaInput>this.bmxData;
		this.formControl.setValue(this.data.value);
	}
}
