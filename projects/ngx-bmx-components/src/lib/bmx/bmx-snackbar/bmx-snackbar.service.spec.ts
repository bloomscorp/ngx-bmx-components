import {TestBed} from '@angular/core/testing';

import {BmxSnackbarService} from './bmx-snackbar.service';

describe('BmxSnackbarService', () => {
	let service: BmxSnackbarService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(BmxSnackbarService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
