import {BmxForm} from "../interface/bmx-form";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {BmxInputLayoutContainer} from "../../bmx-layout/interface/input-layout/bmx-input-layout-container";
import {BmxInputRowItem} from "../../bmx-layout/interface/input-layout/bmx-input-row-item";
import {BmxFormData} from "../interface/bmx-form-data";

export abstract class AbstractBmxForm implements BmxForm {

	public formGroup: FormGroup = {} as FormGroup;
	public data: BmxFormData = {} as BmxFormData;

	public controls: {
		[key: string]: AbstractControl;
	} = {};

	public init(): void {

		for (const containers of this.data.layoutContainers)
			for (const input of containers.group.inputItems)
				this.controls[input.inputItem.name] = new FormControl('');

		this.formGroup = new FormGroup(this.controls);
	}

	public getFormControl(name: string): FormControl {

		if (Object.keys(this.controls).length === 0) {
			console.error("Form controls are empty. Check if you have called AbstractBmxForm#init() within your ngOnInit()!");
		}

		return <FormControl>this.controls[name];
	}

	public trackLayoutContainer(index: number, container: BmxInputLayoutContainer): number {
		return container.id;
	}

	public trackInputElement(index: number, item: BmxInputRowItem): number {
		return item.id;
	}
}
