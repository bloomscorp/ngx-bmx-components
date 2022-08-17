import {BmxLayout} from "../../bmx-layout/interface/bmx-layout";
import {BmxInputLayoutContainer} from "../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {BmxSubmitButton} from "./bmx-submit-button";
import {BmxButtonLayoutContainer} from "../../bmx-layout/interface/button-layout/bmx-button-layout-container";

/**
 * Prepares the form data
 *
 * @interface BmxFormData
 *
 * @member title - Title of the form
 * @member subTitle - Subtitle for the form
 * @member layoutContainers - An array of {@link BmxInputRowLayout - contains elements in a row as described in an array of {@link BmxRowItem}}
 * @member layout - Description of flex layout using {@link BmxLayout}
 */
export interface BmxFormData {
	title: string;
	subTitle: string;
	layoutContainers: BmxInputLayoutContainer[];
	buttonLayout: BmxButtonLayoutContainer;
	layout: BmxLayout;
}
