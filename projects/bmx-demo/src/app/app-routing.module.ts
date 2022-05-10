import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestMapper} from "./request-mapper";

const routes: Routes = [
	{
		path: RequestMapper.DEMO_URL,
		loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
	},
	{
		path: RequestMapper.BASE_RELATIVE_URL,
		redirectTo: RequestMapper.getAbsoluteUrl(RequestMapper.DEMO_URL),
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
