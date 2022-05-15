import {BmxValidator} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/interface/bmx-validator";
import { BmxRequiredValidator} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/validators/bmx-required-validator";
import {
	BmxMinLengthValidator
} from "../../../../../../ngx-bmx-components/src/lib/bmx/bmx-input/model/validators/bmx-min-length-validator";

export class DemoBmxValidator {
	public static required: BmxValidator = new BmxRequiredValidator();
	public static nameMinLength: BmxValidator = new BmxMinLengthValidator(6);
}
