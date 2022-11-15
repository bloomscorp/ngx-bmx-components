import {FormControl} from "@angular/forms";
import {BmxInputLayoutContainer} from "../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {BmxInputRowItem} from "../../bmx-layout/interface/input-layout/bmx-input-row-item";

export interface BmxForm {
	getFormControl: (name: string) => FormControl;
	trackLayoutContainer: (index: number, container: BmxInputLayoutContainer) => number;
	trackInputElement: (index: number, item: BmxInputRowItem) => number;
}
