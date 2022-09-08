import {BmxContentInput} from "./bmx-content-input";
import {BmxSelectInput} from "./bmx-select-input";
import {BmxTextAreaInput} from "./bmx-text-area-input";
import {BmxImageInput} from "./bmx-image-input";
import {BmxAutocompleteInput} from "./bmx-autocomplete-input";
import {BmxDatepickerInput} from "./bmx-datepicker-input";

export declare type BmxContentInputType = 'text' | 'tel' | 'email' | 'number' | 'password' | 'color' | 'date' | 'month' | 'week';

export declare type BmxSelectInputType = 'single' | 'multiple';

export declare type BmxInputElement = BmxContentInput | BmxSelectInput | BmxTextAreaInput | BmxImageInput | BmxAutocompleteInput | BmxDatepickerInput;

export declare type BmxImageInputElement = BmxContentInput | BmxSelectInput | BmxTextAreaInput | BmxDatepickerInput;
