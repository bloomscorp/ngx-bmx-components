import {SimpleBmxFormData} from "./simple-bmx-form-data";
import {BmxInput} from "../../bmx-input/interface/bmx-input";
import {BmxInputRowLayout} from "../../bmx-layout/interface/input-layout/bmx-input-row-layout";
import {BmxInputRowItem} from "../../bmx-layout/interface/input-layout/bmx-input-row-item";
import {BmxInputElement} from "../../bmx-input/interface/bmx-input-element-types";
import {arrayEmpty} from 'bmx-pastebox';
import {BmxSubmitButton} from "../interface/bmx-submit-button";
import {BmxInputType} from "../../bmx-input/interface/bmx-input-type";
import {SimpleBmxButtonLayoutContainer} from "../../bmx-button/bmx-form-button/model/simple-bmx-button-layout-container";

export class TupleBmxFormData extends SimpleBmxFormData {

	public constructor(
		title: string,
		subTitle: string,
		inputs: BmxInputElement[],
		buttonLayout: SimpleBmxButtonLayoutContainer = SimpleBmxFormData.DEFAULT_BUTTON_LAYOUT_CONTAINER,
		submit: BmxSubmitButton = SimpleBmxFormData.DEFAULT_FORM_SUBMIT
	) {
		TupleBmxFormData.validateInputs(inputs);
		super(
			title,
			subTitle,
			TupleBmxFormData.prepareTupleRowLayouts(inputs),
			buttonLayout,
			submit
		);
	}

	private static validateInputs(inputs: BmxInput[]): void {
		if (arrayEmpty(inputs))
			throw new Error('inputs array in TupleBmxFormData cannot be empty or null!');
	}

	private static prepareRowItem(id: number, input: BmxInputElement): BmxInputRowItem {
		return {
			id: id,
			inputItem: input,
			flexXL: 50,
			flexLG: 50,
			flexMD: 50,
			flexSM: 100,
			flexXS: 100,
			classList: []
		};
	}

	private static prepareRowLayout(id1: number, input1: BmxInputElement, id2: number, input2: BmxInputElement): BmxInputRowLayout {
		return {
			inputItems: [
				TupleBmxFormData.prepareRowItem(id1, input1),
				TupleBmxFormData.prepareRowItem(id2, input2)
			]
		};
	}

	private static prepareTupleRowLayouts(inputs: BmxInputElement[]): BmxInputRowLayout[] {

		const layouts: BmxInputRowLayout[] = [];
		const isSizeEven: boolean = inputs.length % 2 == 0;
		const iteratorMaxValue: number = inputs.length - (isSizeEven ? 1 : 2);

		for (let i: number = 0; i <= iteratorMaxValue; i += 2) {
			layouts.push(
				TupleBmxFormData.prepareRowLayout(
					i,
					inputs[i],
					i + 1,
					inputs[i + 1]
				)
			);
		}

		if (!isSizeEven)
			layouts.push({
				inputItems: [
					TupleBmxFormData.prepareRowItem(
						inputs.length - 1,
						inputs[inputs.length - 1]
					),
				]
			});

		return layouts;
	}
}
