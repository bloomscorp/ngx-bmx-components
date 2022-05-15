import {Component, OnInit} from '@angular/core';
import {BmxFormData} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/interface/bmx-form-data";
import {DemoBmxFormData} from "../model/demo-bmx-form-data";

@Component({
	selector: 'app-bmx-form-demo',
	templateUrl: './bmx-form-demo.component.html',
	styleUrls: ['./bmx-form-demo.component.scss']
})
export class BmxFormDemoComponent implements OnInit {

	public contactForm: BmxFormData = DemoBmxFormData.contactForm;

	constructor() {
	}

	ngOnInit(): void {
	}

}
