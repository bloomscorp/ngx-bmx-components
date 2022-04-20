import {BmxLayout} from "../../bmx-layout/interface/bmx-layout";
import {BmxLayoutContainer} from "../../bmx-layout/interface/bmx-layout-container";

/**
 * Prepares the form data
 *
 * @interface BmxFormData
 *
 * @member title - Title of the form
 * @member subTitle - Subtitle for the form
 * @member layoutContainers - An array of {@link BmxRowLayout - contains elements in a row as described in an array of {@link BmxRowItem}}
 * @member layout - Description of flex layout using {@link BmxLayout}
 */
export interface BmxFormData {
	title: string;
	subTitle: string;
	layoutContainers: BmxLayoutContainer[],
	layout: BmxLayout;
}
