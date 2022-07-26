import {BmxRowItem} from "../bmx-row-item";
import {BmxButtonElement} from "../../../bmx-button/interface/bmx-button-element-types";

/**
 * Prepares one item in a row
 *
 * @interface BmxButtonRowItem
 *
 * @member buttonItem - The item described as a {@link BmxButtonElement}
 */
export interface BmxButtonRowItem extends BmxRowItem {
	buttonItem: BmxButtonElement;
}
