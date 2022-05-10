import {AbstractBmxFormData} from "./abstract-bmx-form-data";
import {BmxRowLayout} from "../../bmx-layout/interface/bmx-row-layout";
import {BmxLayoutContainer} from "../../bmx-layout/interface/bmx-layout-container";
import {arrayEmpty} from "bmx-pastebox";

export class SimpleBmxFormData extends AbstractBmxFormData {

	public constructor(
		title: string,
		subTitle: string,
		rowLayouts: BmxRowLayout[],
		onSubmit: () => void
	) {
		SimpleBmxFormData.validateRows(rowLayouts);
		super(
			title,
			subTitle,
			SimpleBmxFormData.prepareGroups(rowLayouts),
			onSubmit
		);
	}

	private static validateRows(rows: BmxRowLayout[]): void {
		if (arrayEmpty(rows))
			throw new Error('rows array in SimpleBmxFormData cannot be empty or null!');
	}

	private static prepareGroups(rowLayouts: BmxRowLayout[]): BmxLayoutContainer[] {

		const containers: BmxLayoutContainer[] = [];

		for (let i: number = 0; i < rowLayouts.length; i++)
			containers.push({
				id: i,
				group: rowLayouts[i],
				classList: []
			});

		return containers;
	}
}
