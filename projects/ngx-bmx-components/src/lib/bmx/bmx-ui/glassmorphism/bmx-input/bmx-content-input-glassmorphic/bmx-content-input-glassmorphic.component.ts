import {Component, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../../../../bmx-input/interface/bmx-input-element-types";
import {FormControl} from "@angular/forms";
import {BmxContentInput} from "../../../../bmx-input/interface/bmx-content-input";

@Component({
	selector: 'bmx-content-input-glassmorphic',
	templateUrl: './bmx-content-input-glassmorphic.component.html',
	styleUrls: ['./bmx-content-input-glassmorphic.component.scss']
})
export class BmxContentInputGlassmorphicComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: FormControl = {} as FormControl;

	public data: BmxContentInput = {} as BmxContentInput;

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxContentInput>this.bmxData;
		setTimeout(() => this.formControl.setValue(this.data.value), 0);
	}
}
