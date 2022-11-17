import {Component, Input, OnInit} from '@angular/core';
import {AbstractBmxForm} from "../../../../bmx-form/model/abstract-bmx-form";
import {BmxFormData} from "../../../../bmx-form/interface/bmx-form-data";

@Component({
	selector: 'bmx-form-glassmorphic',
	templateUrl: './bmx-form-glassmorphic.component.html',
	styleUrls: ['./bmx-form-glassmorphic.component.scss']
})
export class BmxFormGlassmorphicComponent extends AbstractBmxForm implements OnInit {

	@Input()
	public override data: BmxFormData = {} as BmxFormData;

	constructor() {
		super();
	}

	ngOnInit(): void {
		super.init();
	}

}
