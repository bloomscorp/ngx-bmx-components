import {AbstractBmxImageInput} from "./abstract-bmx-image-input";
import {BmxImageInput} from "../../interface/bmx-image-input";

export class BmxSimpleImageInput extends AbstractBmxImageInput {

	public constructor(
		name: string,
		src: string,
		alt: string,
		width: number,
		height: number
	) {
		super(
			name,
			src,
			alt,
			width,
			height
		)
	}

	public static getInstance(
		name: string,
		src: string,
		alt: string,
		width: number = 200,
		height: number = 200
	): BmxImageInput {

		return new BmxSimpleImageInput (
			name,
			src,
			alt,
			width,
			height
		);
	}

}
