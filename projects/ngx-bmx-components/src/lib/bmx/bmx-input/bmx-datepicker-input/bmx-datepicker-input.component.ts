import {Component, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {UntypedFormControl} from "@angular/forms";
import {BmxContentInput} from "../interface/bmx-content-input";
import {BmxDatepickerInput} from "../interface/bmx-datepicker-input";

@Component({
	selector: 'bmx-datepicker-input',
	templateUrl: './bmx-datepicker-input.component.html',
	styleUrls: ['./bmx-datepicker-input.component.scss']
})
export class BmxDatepickerInputComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: UntypedFormControl = {} as UntypedFormControl;

	public data: BmxDatepickerInput = {} as BmxDatepickerInput;

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxDatepickerInput>this.bmxData;
		setTimeout(() => this.formControl.setValue(new Date(this.data.value)), 0);
	}

}
