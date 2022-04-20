import {BmxContentInput} from "./bmx-content-input";
import {BmxSelectInput} from "./bmx-select-input";
import {BmxTextAreaInput} from "./bmx-text-area-input";

export declare type BmxContentInputType = 'text' | 'tel' | 'email' | 'number';

export declare type BmxSelectInputType = 'single' | 'multiple';

export declare type BmxInputElement = BmxContentInput | BmxSelectInput | BmxTextAreaInput;
