import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestMapper} from "../request-mapper";
import {DemoComponent} from "./demo/demo.component";

const routes: Routes = [
	{
		path: RequestMapper.BASE_RELATIVE_URL,
		component: DemoComponent
	},
	{
		path: RequestMapper.BMX_FORM_URL,
		loadChildren: () => import('./bmx-form-demo/bmx-form-demo.module').then(m => m.BmxFormDemoModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DemoRoutingModule {
}
