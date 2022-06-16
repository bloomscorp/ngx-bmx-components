import {BmxButtonLayoutContainer} from "../../../bmx-layout/interface/button-layout/bmx-button-layout-container";
import {BmxButtonRowLayout} from "../../../bmx-layout/interface/button-layout/bmx-button-row-layout";

export class AbstractBmxButtonLayoutContainer implements BmxButtonLayoutContainer {

	protected constructor(
		public id: number,
		public group: BmxButtonRowLayout,
		public classList: string[]
	) {
	}
}
