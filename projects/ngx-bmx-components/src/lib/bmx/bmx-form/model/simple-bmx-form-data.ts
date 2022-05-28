import {AbstractBmxFormData} from "./abstract-bmx-form-data";
import {BmxInputRowLayout} from "../../bmx-layout/interface/input-layout/bmx-input-row-layout";
import {BmxInputLayoutContainer} from "../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {arrayEmpty} from "bmx-pastebox";
import {BmxSubmitButton} from "../interface/bmx-submit-button";
import {FormGroup} from "@angular/forms";

export class SimpleBmxFormData extends AbstractBmxFormData {

	public static readonly DEFAULT_FORM_SUBMIT: BmxSubmitButton = {
		title: 'submit',
		classList: ['bmx-form-submit-button__default'],
		onSubmit: (formGroup: FormGroup) => console.error('BmxSubmitButton#onSubmit is not implemented!'),
		validateBeforeSubmit: true
	};

	public constructor(
		title: string,
		subTitle: string,
		rowLayouts: BmxInputRowLayout[],
		submit: BmxSubmitButton = SimpleBmxFormData.DEFAULT_FORM_SUBMIT
	) {
		SimpleBmxFormData.validateRows(rowLayouts);
		super(
			title,
			subTitle,
			SimpleBmxFormData.prepareGroups(rowLayouts),
			submit
		);
	}

	private static validateRows(rows: BmxInputRowLayout[]): void {
		if (arrayEmpty(rows))
			throw new Error('rows array in SimpleBmxFormData cannot be empty or null!');
	}

	private static prepareGroups(rowLayouts: BmxInputRowLayout[]): BmxInputLayoutContainer[] {

		const containers: BmxInputLayoutContainer[] = [];

		for (let i: number = 0; i < rowLayouts.length; i++)
			containers.push({
				id: i,
				group: rowLayouts[i],
				classList: []
			});

		return containers;
	}
}
