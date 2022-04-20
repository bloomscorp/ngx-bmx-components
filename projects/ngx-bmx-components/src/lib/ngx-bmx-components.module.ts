import {NgModule} from '@angular/core';
import {NgxBmxComponentsComponent} from './ngx-bmx-components.component';
import {BmxFormModule} from "./bmx/bmx-form/bmx-form.module";


@NgModule({
	declarations: [
		NgxBmxComponentsComponent
	],
	imports: [],
	exports: [
		NgxBmxComponentsComponent,
		BmxFormModule
	]
})
export class NgxBmxComponentsModule {
}
