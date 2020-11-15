import {writable} from 'svelte/store';

export const toasts = writable([]);

let toastId = 0;
function getToastId() {
	return toastId++;
}

function addToast(newToast) {
	toasts.update(toasts => {
		return [
			...toasts,
			newToast
		]
	})
}

let lastFrame = Date.now(),
	expirationPaused = false;

export function pauseExpiration() {
	expirationPaused = true;
	toasts.update(toasts => {
		return toasts.map(toast => {
			toast.ttl = toast.initialTTL;
			return toast;
		})
	})
}
export function resumeExpiration() {
	expirationPaused = false;
}

function onFrame() {
	requestAnimationFrame(onFrame);
	const now = Date.now(),
		delta = now - lastFrame;
	lastFrame = now;

	if (expirationPaused) {
		return;
	}

	toasts.update(toasts => {
		return toasts.map(toast => {
			toast.ttl -= delta;
			return toast;
		})
			.filter(toast => {
				return toast.ttl > 0;
			});
	})
}
onFrame();

export function createAutoExpireToast(options) {
	const id = getToastId(),
		ttl = options.ttl || 5000;

	addToast({
		id,
		ttl,
		initialTTL: ttl,
		title: options.title,
		message: options.message || '',
		technicalDetails: options.technicalDetails,
		variant: options.variant || 'info'
	})

	return id;
}

export function createPersistentToast(options) {
	return createAutoExpireToast(Object.assign(options, {
		ttl: Infinity
	}))
}

export function clearToast(id) {
	toasts.update(toasts => {
		return toasts.filter(toast => toast.id !== id);
	});
}