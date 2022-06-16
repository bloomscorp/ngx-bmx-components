import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BmxConfirmationSnackbarComponent} from './bmx-confirmation-snackbar.component';

describe('BmxConfirmationSnackbarComponent', () => {
	let component: BmxConfirmationSnackbarComponent;
	let fixture: ComponentFixture<BmxConfirmationSnackbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BmxConfirmationSnackbarComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BmxConfirmationSnackbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
