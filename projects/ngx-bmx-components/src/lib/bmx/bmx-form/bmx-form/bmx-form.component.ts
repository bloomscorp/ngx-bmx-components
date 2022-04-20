import {Component, Input, OnInit} from '@angular/core';
import {BmxFormData} from "../interface/bmx-form-data";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {BmxLayoutContainer} from "../../bmx-layout/interface/bmx-layout-container";
import {BmxRowItem} from "../../bmx-layout/interface/bmx-row-item";

@Component({
	selector: 'bmx-form',
	templateUrl: './bmx-form.component.html',
	styleUrls: ['./bmx-form.component.scss']
})
export class BmxFormComponent implements OnInit {

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

	public trackLayoutContainer(index: number, container: BmxLayoutContainer): number {
		return container.id;
	}

	public trackInputElement(index: number, item: BmxRowItem): number {
		return item.id;
	}
}
