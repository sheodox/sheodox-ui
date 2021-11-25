import { writable } from 'svelte/store';

export interface ToastOptions {
	id?: number;
	ttl?: number;
	initialTTL?: number;
	title: string;
	message: string;
	technicalDetails?: string;
	variant?: 'info' | 'error';
	href?: string;
	progress?: boolean;
	min?: number;
	max?: number;
	value?: number;
}
export type ToastOptionsCreatable = Omit<ToastOptions, 'id'>;

export type Toasts = ToastOptions[];

export const toasts = writable([]);

export const expirationPaused = writable(false);

let toastId = 0;
function getToastId() {
	return toastId++;
}

function addToast(newToast: ToastOptions) {
	toasts.update((toasts) => {
		return [...toasts, newToast];
	});
}

export function pauseExpiration() {
	expirationPaused.set(true);
	toasts.update((toasts) => {
		return toasts.map((toast) => {
			toast.ttl = toast.initialTTL;
			return toast;
		});
	});
}
export function resumeExpiration() {
	expirationPaused.set(false);
}

export function createAutoExpireToast(options: ToastOptionsCreatable) {
	const id = getToastId(),
		ttl = options.ttl || 5000;

	addToast({
		id,
		ttl,
		initialTTL: ttl,
		title: options.title,
		message: options.message || '',
		technicalDetails: options.technicalDetails,
		variant: options.variant || 'info',
		href: options.href,
		//toasts with a progress bar have additional options
		...(options.progress
			? {
					min: options.min,
					max: options.max,
					value: options.value || 0,
					progress: true,
			  }
			: {}),
	});

	return id;
}

export function createPersistentToast(options: ToastOptions) {
	return createAutoExpireToast(
		Object.assign(options, {
			ttl: Infinity,
		})
	);
}

export function createProgressToast(options: ToastOptions & Required<Pick<ToastOptions, 'max'>>) {
	if (typeof options.min === 'undefined') {
		// if no min is specified it's probably going to start counting from zero, and it'll
		// realistically probably only ever count from zero.
		options.min = 0;
	}
	if (typeof options.value === 'undefined') {
		options.value = options.min;
	}

	return createAutoExpireToast({
		//expecting all the same options as a normal toast, plus a "min" and "max"
		...options,
		progress: true,
	});
}

export function updateToast(id: number, updates: Partial<ToastOptions>) {
	toasts.update((toasts) => {
		return toasts.map((toast) => {
			if (toast.id === id) {
				//keep this toast around until it stops updating,
				//can be used for long running things like uploads
				toast.ttl = toast.initialTTL;
				//allow any arbitrary properties to be updated
				Object.assign(toast, updates);
			}
			return toast;
		});
	});
}

export function clearToast(id: number) {
	toasts.update((toasts) => {
		const remainingToasts = toasts.filter((toast) => toast.id !== id);

		//if only one toast exists and it's dismissed it might not trigger
		//the mouseleave handler and resume expiration. without this if
		//you dismiss the last toast, then more toasts appear later they
		//never auto-dismiss until you trigger mouseleave another time.
		//this could still possibly be an issue if a second long toast is dismissed
		//and the toast container no longer contains the cursor (so moving
		//it away doesn't trigger mouseleave) but the fixed case is most likely and I've
		//been unable to reproduce the issue with the theoretical case
		if (!remainingToasts.length) {
			resumeExpiration();
		}
		return remainingToasts;
	});
}
