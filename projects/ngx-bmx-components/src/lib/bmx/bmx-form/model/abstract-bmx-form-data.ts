import {BmxFormData} from "../interface/bmx-form-data";
import {BmxLayout} from "../../bmx-layout/interface/bmx-layout";
import {BmxLayoutFxXS} from "../../bmx-layout/interface/bmx-layout-fx-xs";
import {BmxLayoutFxSM} from "../../bmx-layout/interface/bmx-layout-fx-sm";
import {BmxLayoutFxMD} from "../../bmx-layout/interface/bmx-layout-fx-md";
import {BmxInputLayoutContainer} from "../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {BmxSubmitButton} from "../interface/bmx-submit-button";
import {BmxButtonLayoutContainer} from "../../bmx-layout/interface/button-layout/bmx-button-layout-container";

export abstract class AbstractBmxFormData implements BmxFormData {

	private static readonly DEFAULT_XS_LAYOUT: BmxLayoutFxXS = {
		layout: 'column',
		align: 'start stretch'
	};

	private static readonly DEFAULT_SM_LAYOUT: BmxLayoutFxSM = {
		layout: 'column',
		align: 'start stretch'
	};

	private static readonly DEFAULT_MD_LAYOUT: BmxLayoutFxMD = {
		layout: 'column',
		align: 'start stretch'
	};

	private static readonly DEFAULT_LG_LAYOUT: BmxLayoutFxMD = {
		layout: 'column',
		align: 'start stretch'
	};

	private static readonly DEFAULT_XL_LAYOUT: BmxLayoutFxMD = {
		layout: 'column',
		align: 'start stretch'
	};

	private static readonly DEFAULT_LAYOUT: BmxLayout = {
		xs: AbstractBmxFormData.DEFAULT_XS_LAYOUT,
		sm: AbstractBmxFormData.DEFAULT_SM_LAYOUT,
		md: AbstractBmxFormData.DEFAULT_MD_LAYOUT,
		lg: AbstractBmxFormData.DEFAULT_LG_LAYOUT,
		xl: AbstractBmxFormData.DEFAULT_XL_LAYOUT
	};

	protected constructor(
		public title: string,
		public subTitle: string,
		public layoutContainers: BmxInputLayoutContainer[],
		public buttonLayout: BmxButtonLayoutContainer,
		public submit: BmxSubmitButton,
		public layout: BmxLayout = AbstractBmxFormData.DEFAULT_LAYOUT
	) {
	}
}
