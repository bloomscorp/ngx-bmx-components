import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BmxInfoSnackbarComponent} from './bmx-info-snackbar.component';

describe('BmxInfoSnackbarComponent', () => {
	let component: BmxInfoSnackbarComponent;
	let fixture: ComponentFixture<BmxInfoSnackbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BmxInfoSnackbarComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BmxInfoSnackbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
