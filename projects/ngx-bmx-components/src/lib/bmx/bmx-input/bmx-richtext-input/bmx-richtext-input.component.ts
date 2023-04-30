import {Component, Input, OnInit} from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {FormControl} from "@angular/forms";
import {BmxTextAreaInput} from "../interface/bmx-text-area-input";
import {BmxRichtextInput} from "../interface/bmx-richtext-input";
import {BmxSelectInput} from "../interface/bmx-select-input";

@Component({
	selector: 'bmx-richtext-input',
	templateUrl: './bmx-richtext-input.component.html',
	styleUrls: ['./bmx-richtext-input.component.scss']
})
export class BmxRichtextInputComponent implements OnInit {

	public Editor = ClassicEditor;

	@Input() public bmxData: BmxInputElement = {} as BmxInputElement;
	@Input() public formControl: FormControl = {} as FormControl;
	public data: BmxRichtextInput = {} as BmxRichtextInput;

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxRichtextInput>this.bmxData;
		setTimeout(() => this.formControl.setValue(this.data.value), 0);
	}

}
