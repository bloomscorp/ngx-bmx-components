import {BmxValidator} from "../../../../../../../dist/ngx-bmx-components/lib/bmx/bmx-input/interface/bmx-validator";
import {BmxMinLengthValidator, BmxRequiredValidator} from "ngx-bmx-components";

export class DemoBmxValidator {
	public static required: BmxValidator = new BmxRequiredValidator();
	public static nameMinLength: BmxValidator = new BmxMinLengthValidator(6);
}
