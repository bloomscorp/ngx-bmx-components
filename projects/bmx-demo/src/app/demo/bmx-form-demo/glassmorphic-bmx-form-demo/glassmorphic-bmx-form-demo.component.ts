import {Component, OnInit} from '@angular/core';
import {BmxFormData} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/interface/bmx-form-data";
import {DemoBmxFormData} from "../model/demo-bmx-form-data";

@Component({
	selector: 'app-glassmorphic-bmx-form-demo',
	templateUrl: './glassmorphic-bmx-form-demo.component.html',
	styleUrls: ['./glassmorphic-bmx-form-demo.component.scss']
})
export class GlassmorphicBmxFormDemoComponent implements OnInit {

	public contactForm: BmxFormData = DemoBmxFormData.contactForm;

	constructor() {
	}

	ngOnInit(): void {
	}
}
