import {Component, EventEmitter, OnInit} from '@angular/core';
import {BmxFormData} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-form/interface/bmx-form-data";
import {DemoBmxFormData} from "../model/demo-bmx-form-data";
import {BmxSelectInput} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-select-input";
import {DemoBmxInput} from "../model/demo-bmx-input";
import {BmxSelectInputItem} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-select-input-item";

@Component({
	selector: 'app-bmx-form-demo',
	templateUrl: './bmx-form-demo.component.html',
	styleUrls: ['./bmx-form-demo.component.scss']
})
export class BmxFormDemoComponent implements OnInit {

	public contactForm: BmxFormData = DemoBmxFormData.contactForm;

	public testChange: (event: EventEmitter<string | number>) => void = (event: EventEmitter<string | number>) => {

		console.log('on-value-changes-test');

		let gender: BmxSelectInput = <BmxSelectInput>this.contactForm.layoutContainers[1].group.inputItems[1].inputItem;
		let toppings: BmxSelectInput = <BmxSelectInput>this.contactForm.layoutContainers[2].group.inputItems[0].inputItem;

		console.log(toppings);
		console.log(gender);

		let value1: BmxSelectInputItem[] = [];

		const v1: BmxSelectInputItem[] = [
			{
				title: 'Peperoni',
				value: 'PEPERONI'
			}
		];
		const v2: BmxSelectInputItem[] = [
			{
				title: 'mushroom',
				value: 'MUSHROOM'
			}
		];
		const v3: BmxSelectInputItem[] = [
			{
				title: 'Onion',
				value: 'ONION'
			}
		];

		switch ((<BmxSelectInputItem>gender.value).value) {
			case 'male': value1 = v1; break;
			case 'female': value1 = v2; break;
			case 'other': value1 = v3; break;
		}

		toppings.value = value1;

		console.log(toppings);
	}

	constructor() {
	}

	ngOnInit(): void {
		DemoBmxInput.genderSelect.onValueChange = this.testChange;
	}

	public test(): void {

		console.log(this.contactForm.layoutContainers[2].group.inputItems[1].inputItem);

		let toppings: BmxSelectInput = <BmxSelectInput>this.contactForm.layoutContainers[2].group.inputItems[0].inputItem;

		console.log(toppings);
	}
}
