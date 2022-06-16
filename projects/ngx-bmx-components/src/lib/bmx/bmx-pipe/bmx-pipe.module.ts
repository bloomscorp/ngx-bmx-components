import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';



@NgModule({
	declarations: [
		SafeUrlPipe,
		SafeHtmlPipe
	],
	exports: [
		SafeHtmlPipe
	],
	imports: [
		CommonModule
	]
})
export class BmxPipeModule { }
