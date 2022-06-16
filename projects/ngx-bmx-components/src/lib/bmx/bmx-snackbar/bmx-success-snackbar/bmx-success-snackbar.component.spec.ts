import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BmxSuccessSnackbarComponent} from './bmx-success-snackbar.component';

describe('BmxSuccessSnackbarComponent', () => {
	let component: BmxSuccessSnackbarComponent;
	let fixture: ComponentFixture<BmxSuccessSnackbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BmxSuccessSnackbarComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BmxSuccessSnackbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
