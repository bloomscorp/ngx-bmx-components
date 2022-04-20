import {BmxInput} from "../../bmx-input/interface/bmx-input";
import {BmxInputElement} from "../../bmx-input/interface/bmx-input-element-types";

/**
 * Prepares one item in a row
 *
 * @interface BmxRowItem
 *
 * @member id - Keeps track of the item. Used in *ngFor: trackById for performance optimizations
 * @member inputItem - The item described as a {@link BmxInput}
 * @member flex - The layout flex value between 0 and 100
 * @member classList - A list of dynamic CSS classes to be injected into the item UI
 */
export interface BmxRowItem {
	id: number;
	inputItem: BmxInputElement;
	flex: number;
	classList: string[];
}