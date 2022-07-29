import {Component, Input, OnInit} from '@angular/core';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {FormControl} from "@angular/forms";
import {BmxAutocompleteInput} from "../interface/bmx-autocomplete-input";
import {BmxSelectInput} from "../interface/bmx-select-input";
import {BmxSelectInputExtendedItem} from "../interface/bmx-select-input-extended-item";
import {BmxAutocompleteExtendedItem} from "../interface/bmx-autocomplete-extended-item";
import {map, Observable, startWith} from "rxjs";

@Component({
	selector: 'bmx-autocomplete-input',
	templateUrl: './bmx-autocomplete-input.component.html',
	styleUrls: ['./bmx-autocomplete-input.component.scss']
})
export class BmxAutocompleteInputComponent implements OnInit {

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: FormControl = {} as FormControl;

	public data: BmxAutocompleteInput = {} as BmxAutocompleteInput;
	public filteredOptions: Observable<BmxAutocompleteExtendedItem[]> = {} as Observable<BmxAutocompleteExtendedItem[]>;

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxAutocompleteInput>this.bmxData;
		setTimeout(() => this.formControl.setValue(this.data.value.value), 0);

		this.filteredOptions = this.formControl.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value)),
		);
	}

	private _filter(value: string): BmxAutocompleteExtendedItem[] {
		const filterValue = value.toLowerCase();

		return this.data.entries.filter(entry => entry.title.toLowerCase().includes(filterValue));
	}

	public trackItems(index: number, item: BmxAutocompleteExtendedItem): number {
		return item.id;
	}

}
