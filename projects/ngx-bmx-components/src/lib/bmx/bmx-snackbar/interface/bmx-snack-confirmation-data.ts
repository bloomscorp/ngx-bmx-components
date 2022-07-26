export interface BmxSnackConfirmationData {
	message?: string | null;
	accept: () => void;
	reject?: (() => void) | null,
	injectDismiss?: boolean | null;
}
