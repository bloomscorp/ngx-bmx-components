/**
 * Prepares one item in a row
 *
 * @interface BmxRowItem
 *
 * @member id - Keeps track of the item. Used in *ngFor: trackById for performance optimizations
 * @member flex - The layout flex value between 0 and 100
 * @member classList - A list of dynamic CSS classes to be injected into the item UI
 */
export interface BmxRowItem {
	id: number;
	flexXL: number;
	flexLG: number;
	flexMD: number;
	flexSM: number;
	flexXS: number;
	classList: string[];
}
