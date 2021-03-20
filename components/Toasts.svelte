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
</style>

<div
	id="toast-container"
	on:mouseenter={pauseExpiration}
	on:mouseleave={resumeExpiration}
	class={dockedAt}
>
	{#each $toasts as toast}
		<Toast {toast} />
	{/each}
</div>

<script>
	import {toasts, pauseExpiration, resumeExpiration} from "./toast";
	import Toast from './Toast';

	export let dockedAt = 'top-right';
</script>