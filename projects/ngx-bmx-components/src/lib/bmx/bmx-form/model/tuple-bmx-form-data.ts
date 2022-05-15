import {SimpleBmxFormData} from "./simple-bmx-form-data";
import {BmxInput} from "../../bmx-input/interface/bmx-input";
import {BmxRowLayout} from "../../bmx-layout/interface/bmx-row-layout";
import {BmxRowItem} from "../../bmx-layout/interface/bmx-row-item";
import {BmxInputElement} from "../../bmx-input/interface/bmx-input-element-types";
import {arrayEmpty} from 'bmx-pastebox';
import {BmxSubmitButton} from "../interface/bmx-submit-button";
import {BmxInputType} from "../../bmx-input/interface/bmx-input-type";

export class TupleBmxFormData extends SimpleBmxFormData {

	public constructor(
		title: string,
		subTitle: string,
		inputs: BmxInputElement[],
		submit: BmxSubmitButton = SimpleBmxFormData.DEFAULT_FORM_SUBMIT
	) {
		TupleBmxFormData.validateInputs(inputs);
		super(
			title,
			subTitle,
			TupleBmxFormData.prepareTupleRowLayouts(inputs),
			submit
		);
	}

	private static validateInputs(inputs: BmxInput[]): void {
		if (arrayEmpty(inputs))
			throw new Error('inputs array in TupleBmxFormData cannot be empty or null!');
	}

	private static prepareRowItem(id: number, input: BmxInputElement): BmxRowItem {
		if (input.inputType === BmxInputType.IMAGE) {
			return {
				id: id,
				inputItem: input,
				flex: 100,
				classList: []
			};
		}
		return {
			id: id,
			inputItem: input,
			flex: 50,
			classList: []
		};
	}

	private static prepareRowLayout(id1: number, input1: BmxInputElement, id2: number, input2: BmxInputElement): BmxRowLayout {
		return {
			inputItems: [
				TupleBmxFormData.prepareRowItem(id1, input1),
				TupleBmxFormData.prepareRowItem(id2, input2)
			]
		};
	}

	private static prepareTupleRowLayouts(inputs: BmxInputElement[]): BmxRowLayout[] {

		const layouts: BmxRowLayout[] = [];
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
