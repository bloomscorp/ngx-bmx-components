import {AbstractBmxButtonLayoutContainer} from "./abstract-bmx-button-layout-container";
import {BmxButtonRowLayout} from "../../../bmx-layout/interface/button-layout/bmx-button-row-layout";

export class SimpleBmxButtonLayoutContainer extends AbstractBmxButtonLayoutContainer {

	public constructor(
		rowLayout: BmxButtonRowLayout
	) {
		super(
			0,
			 rowLayout,
			[]
		);
	}
}
