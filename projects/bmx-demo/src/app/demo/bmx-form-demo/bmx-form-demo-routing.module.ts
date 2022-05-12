import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestMapper} from "../../request-mapper";
import {BmxFormDemoComponent} from "./bmx-form-demo/bmx-form-demo.component";

const routes: Routes = [
	{
		path: RequestMapper.BASE_RELATIVE_URL,
		component: BmxFormDemoComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BmxFormDemoRoutingModule {
}
