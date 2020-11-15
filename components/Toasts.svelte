<style>
	#toast-container {
		position: fixed;
		right: 0;
		top: 0;
		max-width: 95vw;
		width: 20rem;
	}
</style>

<div id="toast-container" on:mouseenter={pauseExpiration} on:mouseleave={resumeExpiration}>
	{#each $toasts as toast}
		<Toast {toast} />
	{/each}
</div>

<script>
	import {toasts, pauseExpiration, resumeExpiration} from "./toast";
	import Toast from './Toast';
</script>