import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BmxInputElement} from "../interface/bmx-input-element-types";
import {FormControl} from "@angular/forms";
import {BmxAutocompleteInput} from "../interface/bmx-autocomplete-input";
import {Observable} from "rxjs";
import {BmxAutocompleteExtendedItem} from "../interface/bmx-autocomplete-extended-item";
import {map, startWith} from "rxjs/operators";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
	selector: 'bmx-multiple-autocomplete-input',
	templateUrl: './bmx-multiple-autocomplete-input.component.html',
	styleUrls: [
		'./bmx-multiple-autocomplete-input.component.scss',
		'../bmx-autocomplete-input/bmx-autocomplete-input.component.scss'
	]
})
export class BmxMultipleAutocompleteInputComponent implements OnInit {

	public separatorKeysCodes: number[] = [ENTER, COMMA];

	@Input()
	public bmxData: BmxInputElement = {} as BmxInputElement;

	@Input()
	public formControl: FormControl = {} as FormControl;

	public autoChips: string[] = [];
	public data: BmxAutocompleteInput = {} as BmxAutocompleteInput;
	public filteredOptions: Observable<BmxAutocompleteExtendedItem[]> = {} as Observable<BmxAutocompleteExtendedItem[]>;

	constructor() {
	}

	ngOnInit(): void {
		this.data = <BmxAutocompleteInput>this.bmxData;
		setTimeout(() => {
			this.formControl.setValue(this.data.value.value)
			if(this.formControl.value)
				this.autoChips = this.formControl.value.split(',')
		}, 0);

		this.filteredOptions = this.formControl.valueChanges.pipe(
			startWith(null),
			map((filterValue: any | null) => (
				filterValue ? this._filter(filterValue) : this.data.entries)
			),
		);
	}

	public add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		if (value) {
			this.autoChips.push(value);
		}
		event.chipInput!.clear();

		this.formControl.setValue(this.autoChips.join(','));
	}

	public remove(fruit: string): void {
		const index = this.autoChips.indexOf(fruit);

		if (index >= 0) {
			this.autoChips.splice(index, 1);
		}
		this.formControl.setValue(this.autoChips.join(','));
	}

	public selected(event: MatAutocompleteSelectedEvent): void {
		this.autoChips.push(event.option.value);
		this.formControl.setValue(this.autoChips.join(','));
	}

	private _filter(value: string): BmxAutocompleteExtendedItem[] {
		const filterValue = value
		return this.data.entries.filter(entry => entry.title.toLowerCase().includes(filterValue));
	}

	public trackItems(index: number, item: BmxAutocompleteExtendedItem): number {
		return item.id;
	}
}
