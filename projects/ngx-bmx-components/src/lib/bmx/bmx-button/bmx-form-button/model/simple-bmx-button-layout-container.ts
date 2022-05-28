import {AbstractBmxButtonLayoutContainer} from "./abstract-bmx-button-layout-container";
import {BmxButtonRowLayout} from "../../../bmx-layout/interface/button-layout/bmx-button-row-layout";
import {BmxInputRowLayout} from "../../../bmx-layout/interface/input-layout/bmx-input-row-layout";
import {BmxInputLayoutContainer} from "../../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {BmxButtonLayoutContainer} from "../../../bmx-layout/interface/button-layout/bmx-button-layout-container";

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
