import {AbstractBmxImageInput} from "./abstract-bmx-image-input";
import {BmxImageInput} from "../../interface/bmx-image-input";
import {BmxImageInputElement} from "../../interface/bmx-input-element-types";
import {BmxValidator} from "../../interface/bmx-validator";

export class BmxSimpleImageInput extends AbstractBmxImageInput {

	public constructor(
		name: string,
		src: string,
		alt: string,
		width: number,
		height: number,
		classList: string[],
		bmxInput: BmxImageInputElement,
		disabled: boolean,
		hint: string,
		label: string,
		placeholder: string,
		readOnly: boolean,
		validators: BmxValidator[]
	) {
		super(
			name,
			src,
			alt,
			width,
			height,
			classList,
			bmxInput,
			disabled,
			hint,
			label,
			placeholder,
			readOnly,
			validators
		)
	}

	public static getInstance(
		name: string,
		src: string,
		alt: string,
		bmxInput: BmxImageInputElement,
		width: number = 300,
		height: number = 200,
		classList: string[] = [],
		disabled: boolean = false,
		hint: string = '',
		label: string = '',
		placeholder: string = '',
		readOnly: boolean = false,
		validators: BmxValidator[] = []
	): BmxImageInput {

		return new BmxSimpleImageInput (
			name,
			src,
			alt,
			width,
			height,
			classList,
			bmxInput,
			disabled,
			hint,
			label,
			placeholder,
			readOnly,
			validators
		);
	}

}
