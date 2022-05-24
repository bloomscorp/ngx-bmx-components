import { Component, OnInit } from '@angular/core';
import {
	BmxMicroTag
} from "../../../../../ngx-bmx-components/src/lib/bmx/bmx-ui/neumorphism/bmx-tag/interface/bmx-micro-tag";

@Component({
	selector: 'app-demo',
	templateUrl: './demo.component.html',
	styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

	public tagData: BmxMicroTag = {
		title: 'neumorphic micro',
		colour: '#D2691E',
		uppercase: false
	}

	constructor() {
	}

	ngOnInit(): void {
	}

}
