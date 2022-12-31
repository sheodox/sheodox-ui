<style>
	#toast-container {
		position: fixed;
		max-width: 95vw;
		width: 20rem;
		/* just over the z-index of the modal overlay so it can show up over modals */
		z-index: 10001;
	}
	.top-right {
		/* implicitly "top: 0" allows toasts to be positioned below the header by putting it in the page's <main> */
		right: 0;
	}
	.bottom-center {
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	.bottom-left {
		bottom: 0;
		left: 0;
	}
</style>

<div id="toast-container" on:mouseenter={pauseExpiration} on:mouseleave={resumeExpiration} class={dockedAt}>
	{#each $toasts as toast}
		<Toast {toast} />
	{/each}
</div>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { toasts, pauseExpiration, resumeExpiration, expirationPaused } from './toast';
	import Toast from './_Toast.svelte';

	export let dockedAt: 'top-right' | 'bottom-center' | 'bottom-left' = 'top-right';

	let lastFrame = Date.now(),
		animationFrame: ReturnType<typeof requestAnimationFrame>;

	function onFrame() {
		animationFrame = requestAnimationFrame(onFrame);
		const now = Date.now(),
			delta = now - lastFrame;
		lastFrame = now;

		if ($expirationPaused) {
			return;
		}

		toasts.update((toasts) => {
			return toasts
				.map((toast) => {
					toast.ttl = (toast.ttl ?? 5000) - delta;
					return toast;
				})
				.filter((toast) => {
					return (toast.ttl ?? 5000) > 0;
				});
		});
	}

	onMount(() => {
		lastFrame = Date.now();
		onFrame();
	});

	onDestroy(() => {
		typeof cancelAnimationFrame === 'function' && cancelAnimationFrame(animationFrame);
	});
</script>
