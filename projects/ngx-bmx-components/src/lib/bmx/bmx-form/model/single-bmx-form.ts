import {SimpleBmxFormData} from "./simple-bmx-form-data";
import {BmxInputElement} from "../../bmx-input/interface/bmx-input-element-types";
import {
	SimpleBmxButtonLayoutContainer
} from "../../bmx-button/bmx-form-button/model/simple-bmx-button-layout-container";
import {BmxSubmitButton} from "../interface/bmx-submit-button";
import {BmxInput} from "../../bmx-input/interface/bmx-input";
import {arrayEmpty} from "bmx-pastebox";
import {BmxInputRowItem} from "../../bmx-layout/interface/input-layout/bmx-input-row-item";
import {BmxInputRowLayout} from "../../bmx-layout/interface/input-layout/bmx-input-row-layout";

export class SingleBmxForm  extends SimpleBmxFormData {

	public constructor(
		title: string,
		subTitle: string,
		inputs: BmxInputElement[],
		buttonLayout: SimpleBmxButtonLayoutContainer = SimpleBmxFormData.DEFAULT_BUTTON_LAYOUT_CONTAINER,
		submit: BmxSubmitButton = SimpleBmxFormData.DEFAULT_FORM_SUBMIT
	) {
		SingleBmxForm.validateInputs(inputs);
		super(
			title,
			subTitle,
			SingleBmxForm.prepareTupleRowLayouts(inputs),
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
			flexXL: 100,
			flexLG: 100,
			flexMD: 100,
			flexSM: 100,
			flexXS: 100,
			classList: []
		};
	}

	private static prepareRowLayout(id1: number, input1: BmxInputElement, id2: number, input2: BmxInputElement): BmxInputRowLayout {
		return {
			inputItems: [
				SingleBmxForm.prepareRowItem(id1, input1),
				SingleBmxForm.prepareRowItem(id2, input2)
			]
		};
	}

	private static prepareTupleRowLayouts(inputs: BmxInputElement[]): BmxInputRowLayout[] {

		const layouts: BmxInputRowLayout[] = [];
		const isSizeEven: boolean = inputs.length % 2 == 0;
		const iteratorMaxValue: number = inputs.length - (isSizeEven ? 1 : 2);

		for (let i: number = 0; i <= iteratorMaxValue; i += 2) {
			layouts.push(
				SingleBmxForm.prepareRowLayout(
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
					SingleBmxForm.prepareRowItem(
						inputs.length - 1,
						inputs[inputs.length - 1]
					),
				]
			});

		return layouts;
	}
}
