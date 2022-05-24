import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BmxMicroTag} from "../interface/bmx-micro-tag";

@Component({
	selector: 'bmx-micro-tag',
	templateUrl: './bmx-micro-tag.component.html',
	styleUrls: ['./bmx-micro-tag.component.scss']
})
export class BmxMicroTagComponent implements OnInit, AfterViewInit {

	@Input()
	public tag: BmxMicroTag = {
		title: 'tag',
		colour: '#000000',
		uppercase: false
	}

	@ViewChild('microTag') microTag!: ElementRef<HTMLElement>;

	constructor() {
	}

	ngOnInit(): void {

	}

	ngAfterViewInit(): void {
		this.microTag.nativeElement.style.color = this.tag.colour;
	}

}
