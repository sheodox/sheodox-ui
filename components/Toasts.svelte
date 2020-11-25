<style>
	#toast-container {
		position: fixed;
		max-width: 95vw;
		width: 20rem;
	}
	.top-right {
        right: 0;
        top: 0;
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