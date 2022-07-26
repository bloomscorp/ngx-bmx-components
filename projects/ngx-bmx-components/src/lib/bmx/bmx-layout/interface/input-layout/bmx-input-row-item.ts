import {BmxInputElement} from "../../../bmx-input/interface/bmx-input-element-types";
import {BmxRowItem} from "../bmx-row-item";

/**
 * Prepares one item in a row
 *
 * @interface BmxInputRowItem
 *
 * @member inputItem - The item described as a {@link BmxInputElement}
 */
export interface BmxInputRowItem extends BmxRowItem {
	inputItem: BmxInputElement;
}
