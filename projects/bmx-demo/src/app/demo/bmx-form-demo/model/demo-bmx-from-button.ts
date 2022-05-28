import {
	SimpleBmxButtonLayoutContainer
} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-button/bmx-form-button/model/simple-bmx-button-layout-container";
import {BmxButtonRowLayout} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-layout/interface/button-layout/bmx-button-row-layout";
import {BmxButtonRowItem} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-layout/interface/button-layout/bmx-button-row-item";
import {BmxFormButton} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-button/bmx-form-button/interface/bmx-form-button";
import {FormGroup} from "@angular/forms";
import {BmxFormButtonType} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-button/bmx-form-button/interface/bmx-form-button-type";

export class DemoBmxFromButton {

	public static readonly DEFAULT_BUTTON: BmxFormButton = {
		title: 'draft',
		onSubmit: (formGroup: FormGroup) => console.log('BmxFormButton#onSubmit is not implemented!'),
		inputType: BmxFormButtonType.CONFIRM,
		validateBeforeSubmit: true
	};

	public static readonly DEFAULT_BUTTON_ROW_ITEM: BmxButtonRowItem = {
		id: 0,
		flex: 100,
		classList: [],
		buttonItem: DemoBmxFromButton.DEFAULT_BUTTON
	};

	public static readonly DEFAULT_BUTTON_ROW_LAYOUT: BmxButtonRowLayout = {
		buttonItems: [DemoBmxFromButton.DEFAULT_BUTTON_ROW_ITEM]
	};

	public static contactFormButton: SimpleBmxButtonLayoutContainer = new SimpleBmxButtonLayoutContainer(
		DemoBmxFromButton.DEFAULT_BUTTON_ROW_LAYOUT
	);
}
