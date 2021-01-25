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
		const remainingToasts = toasts.filter(toast => toast.id !== id);

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