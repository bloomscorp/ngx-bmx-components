import {AbstractBmxFormData} from "./abstract-bmx-form-data";
import {BmxInputRowLayout} from "../../bmx-layout/interface/input-layout/bmx-input-row-layout";
import {BmxInputLayoutContainer} from "../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {arrayEmpty} from "bmx-pastebox";
import {BmxSubmitButton} from "../interface/bmx-submit-button";
import {FormGroup} from "@angular/forms";
import {SimpleBmxButtonLayoutContainer} from "../../bmx-button/bmx-form-button/model/simple-bmx-button-layout-container";
import {BmxButtonRowLayout} from "../../bmx-layout/interface/button-layout/bmx-button-row-layout";
import {BmxButtonRowItem} from "../../bmx-layout/interface/button-layout/bmx-button-row-item";
import {BmxFormButton} from "../../bmx-button/bmx-form-button/interface/bmx-form-button";
import {BmxFormButtonType} from "../../bmx-button/bmx-form-button/interface/bmx-form-button-type";
import {BmxInputElement} from "../../bmx-input/interface/bmx-input-element-types";
import {BmxInputRowItem} from "../../bmx-layout/interface/input-layout/bmx-input-row-item";

export class SimpleBmxFormData extends AbstractBmxFormData {

	// TODO: remove
	public static readonly DEFAULT_FORM_SUBMIT: BmxSubmitButton = {
		title: 'submit',
		classList: ['bmx-form-submit-button__default'],
		onSubmit: (formGroup: FormGroup) => console.error('BmxSubmitButton#onSubmit is not implemented!'),
		validateBeforeSubmit: true
	};

	public static readonly DEFAULT_BUTTON: BmxFormButton = {
		title: 'submit',
		onSubmit: (formGroup: FormGroup) => console.error('BmxFormButton#onSubmit is not implemented!'),
		inputType: BmxFormButtonType.CONFIRM,
		validateBeforeSubmit: true
	};

	public static readonly DEFAULT_BUTTON_ROW_ITEM: BmxButtonRowItem = {
		id: 0,
		flexXL: 100,
		flexLG: 100,
		flexMD: 100,
		flexSM: 100,
		flexXS: 100,
		classList: [],
		buttonItem: SimpleBmxFormData.DEFAULT_BUTTON
	};

	public static readonly DEFAULT_BUTTON_ROW_LAYOUT: BmxButtonRowLayout = {
		buttonItems: [SimpleBmxFormData.DEFAULT_BUTTON_ROW_ITEM]
	};

	public static readonly DEFAULT_BUTTON_LAYOUT_CONTAINER: SimpleBmxButtonLayoutContainer = new SimpleBmxButtonLayoutContainer(
		SimpleBmxFormData.DEFAULT_BUTTON_ROW_LAYOUT
	);

	public static prepareInputRowLayout(elements: BmxInputElement[]): BmxInputRowLayout[] {

		const rowLayouts: BmxInputRowLayout[] = [];

		elements.forEach((element: BmxInputElement, index: number) => rowLayouts.push({
			inputItems: [{
				inputItem: element,
				id: index,
				flexXL: 100,
				flexLG: 100,
				flexMD: 100,
				flexSM: 100,
				flexXS: 100,
				classList: []
			}]
		}));

		return rowLayouts;
	}

	public constructor(
		title: string,
		subTitle: string,
		rowLayouts: BmxInputRowLayout[],
		buttonLayout: SimpleBmxButtonLayoutContainer = SimpleBmxFormData.DEFAULT_BUTTON_LAYOUT_CONTAINER,
		submit: BmxSubmitButton = SimpleBmxFormData.DEFAULT_FORM_SUBMIT
	) {
		SimpleBmxFormData.validateRows(rowLayouts);
		super(
			title,
			subTitle,
			SimpleBmxFormData.prepareGroups(rowLayouts),
			buttonLayout,
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
