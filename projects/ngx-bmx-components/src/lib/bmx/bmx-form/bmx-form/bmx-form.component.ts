import {Component, Input, OnInit} from '@angular/core';
import {BmxFormData} from "../interface/bmx-form-data";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {BmxInputLayoutContainer} from "../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {BmxInputRowItem} from "../../bmx-layout/interface/input-layout/bmx-input-row-item";
import {BmxFormButton} from "../../bmx-button/bmx-form-button/interface/bmx-form-button";
import {BmxFormButtonType} from "../../bmx-button/bmx-form-button/interface/bmx-form-button-type";
import {BmxForm} from "../interface/bmx-form";
import {AbstractBmxForm} from "../model/abstract-bmx-form";

@Component({
	selector: 'bmx-form',
	templateUrl: './bmx-form.component.html',
	styleUrls: ['./bmx-form.component.scss']
})
export class BmxFormComponent extends AbstractBmxForm implements OnInit {


	@Input()
	public override data: BmxFormData = {} as BmxFormData;

	constructor() {
		super();
	}

	ngOnInit(): void {
		super.init();
	}
}
