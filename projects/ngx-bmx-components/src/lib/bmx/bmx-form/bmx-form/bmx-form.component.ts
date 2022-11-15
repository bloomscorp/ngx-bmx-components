import {Component, Input, OnInit} from '@angular/core';
import {BmxFormData} from "../interface/bmx-form-data";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {BmxInputLayoutContainer} from "../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {BmxInputRowItem} from "../../bmx-layout/interface/input-layout/bmx-input-row-item";
import {BmxFormButton} from "../../bmx-button/bmx-form-button/interface/bmx-form-button";
import {BmxFormButtonType} from "../../bmx-button/bmx-form-button/interface/bmx-form-button-type";
import {BmxForm} from "../interface/bmx-form";

@Component({
	selector: 'bmx-form',
	templateUrl: './bmx-form.component.html',
	styleUrls: ['./bmx-form.component.scss']
})
export class BmxFormComponent implements OnInit, BmxForm {

	@Input()
	public data: BmxFormData = {} as BmxFormData;

	public formGroup: FormGroup = {} as FormGroup;

	public controls: {
		[key: string]: AbstractControl;
	} = {};

	constructor() {
	}

	ngOnInit(): void {

		for (const containers of this.data.layoutContainers)
			for (const input of containers.group.inputItems)
				this.controls[input.inputItem.name] = new FormControl('');

		this.formGroup = new FormGroup(this.controls);
	}

	public getFormControl(name: string): FormControl {
		return <FormControl>this.controls[name];
	}

	public trackLayoutContainer(index: number, container: BmxInputLayoutContainer): number {
		return container.id;
	}

	public trackInputElement(index: number, item: BmxInputRowItem): number {
		return item.id;
	}
}
