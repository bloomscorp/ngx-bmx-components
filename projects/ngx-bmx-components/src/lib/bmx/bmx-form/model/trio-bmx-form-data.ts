import {SimpleBmxFormData} from "./simple-bmx-form-data";
import {BmxInputElement} from "../../bmx-input/interface/bmx-input-element-types";
import {BmxInput} from "../../bmx-input/interface/bmx-input";
import {arrayEmpty} from "bmx-pastebox";
import {BmxInputRowItem} from "../../bmx-layout/interface/input-layout/bmx-input-row-item";
import {BmxInputRowLayout} from "../../bmx-layout/interface/input-layout/bmx-input-row-layout";
import {SimpleBmxButtonLayoutContainer} from "../../bmx-button/bmx-form-button/model/simple-bmx-button-layout-container";
import {BmxSubmitButton} from "../interface/bmx-submit-button";

export class TrioBmxFormData extends SimpleBmxFormData {

	public constructor(
		title: string,
		subTitle: string,
		inputs: BmxInputElement[],
		buttonLayout: SimpleBmxButtonLayoutContainer = SimpleBmxFormData.DEFAULT_BUTTON_LAYOUT_CONTAINER,
		submit: BmxSubmitButton = SimpleBmxFormData.DEFAULT_FORM_SUBMIT
	) {
		TrioBmxFormData.validateInputs(inputs);
		super(
			title,
			subTitle,
			TrioBmxFormData.prepareTrioRowLayouts(inputs),
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
			flex: 33,
			classList: []
		};
	}

	private static prepareRowLayout(
		id1: number, input1: BmxInputElement,
		id2: number, input2: BmxInputElement,
		id3: number, input3: BmxInputElement
	): BmxInputRowLayout {
		return {
			inputItems: [
				TrioBmxFormData.prepareRowItem(id1, input1),
				TrioBmxFormData.prepareRowItem(id2, input2),
				TrioBmxFormData.prepareRowItem(id3, input3),
			]
		};
	}

	private static prepareTrioRowLayouts(inputs: BmxInputElement[]): BmxInputRowLayout[] {

		const layouts: BmxInputRowLayout[] = [];
		const isSizeThird: boolean = inputs.length % 3 == 0;
		const iteratorMaxValue: number = inputs.length - (isSizeThird ? 1 : (inputs.length % 3 + 1));

		for (let i: number = 0; i <= iteratorMaxValue; i += 3) {
			layouts.push(
				TrioBmxFormData.prepareRowLayout(
					i,
					inputs[i],
					i + 1,
					inputs[i + 1],
					i + 2,
					inputs[i + 2]
				)
			);
		}

		if (!isSizeThird)
		{
			if((inputs.length % 3 ) > 1) {
				layouts.push({
					inputItems: [
						TrioBmxFormData.prepareRowItem(
							inputs.length - 2,
							inputs[inputs.length - 2]
						),
						TrioBmxFormData.prepareRowItem(
							inputs.length - 1,
							inputs[inputs.length - 1]
						),
					]
				});
			}
			else {
				layouts.push({
					inputItems: [
						TrioBmxFormData.prepareRowItem(
							inputs.length - 1,
							inputs[inputs.length - 1]
						),
					]
				})
			}
		}


		return layouts;
	}
}
