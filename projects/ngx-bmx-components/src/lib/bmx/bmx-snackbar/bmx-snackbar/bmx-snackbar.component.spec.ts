import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BmxSnackbarComponent} from './bmx-snackbar.component';

describe('BmxSnackbarComponent', () => {
	let component: BmxSnackbarComponent;
	let fixture: ComponentFixture<BmxSnackbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BmxSnackbarComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BmxSnackbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
