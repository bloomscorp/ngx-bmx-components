/**
 * Prepares the form data
 *
 * @interface BmxSubmitButton
 *
 * @member title - Title of the button
 * @member classList - list of CSS classes to be applied to the button element. TailwindCSS classes works the best. While using TailwindCSS
 * classes, it is better to create a custom class name at the component level and add the TailwindCSS utility classes using '@apply'. This way,
 * during compilation, the TailwindCSS classes shall be found by the preprocessor to be included during build time.
 * @member onSubmit - A method / function that returns void and is called during the button press with (submit) event
 */
import {FormGroup} from "@angular/forms";

export interface BmxSubmitButton {
	title: string;
	classList: string[];
	onSubmit: (formGroup: FormGroup) => void;
	validateBeforeSubmit: boolean;
}
