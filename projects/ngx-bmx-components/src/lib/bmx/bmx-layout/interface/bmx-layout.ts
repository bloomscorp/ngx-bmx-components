import {BmxLayoutFxXS} from "./bmx-layout-fx-xs";
import {BmxLayoutFxSM} from "./bmx-layout-fx-sm";
import {BmxLayoutFxMD} from "./bmx-layout-fx-md";
import {BmxLayoutFxLG} from "./bmx-layout-fx-lg";
import {BmxLayoutFxXL} from "./bmx-layout-fx-xl";

export interface BmxLayout {
	xs: BmxLayoutFxXS;
	sm: BmxLayoutFxSM;
	md: BmxLayoutFxMD;
	lg: BmxLayoutFxLG;
	xl: BmxLayoutFxXL;
}
