import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BmxContentInputComponent } from './bmx-content-input/bmx-content-input.component';
import { BmxInputComponent } from './bmx-input/bmx-input.component';
import { BmxSelectInputComponent } from './bmx-select-input/bmx-select-input.component';
import { BmxTextAreaInputComponent } from './bmx-text-area-input/bmx-text-area-input.component';


@NgModule({
  declarations: [
    BmxContentInputComponent,
    BmxInputComponent,
    BmxSelectInputComponent,
    BmxTextAreaInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BmxInputModule { }
