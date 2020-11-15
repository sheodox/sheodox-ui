<style>
	.toast {
		padding: 0.5rem;
		margin: 0.5rem;
		border-radius: 0.2rem;
		box-shadow: 0 0 0.2rem black;
	}
	.title {
		font-size: 1.1rem;
	}
	p {
		margin: 0;
	}
	.error {
		background: var(--accent-red);
	}
	.info {
        background: var(--panel-header-bg-light);
	}
	pre {
		overflow: auto;
		font-size: 0.7rem;
	}
</style>

<div class="toast {toast.variant}">
	<div class="f-row justify-content-between">
		<p class="title">{toast.title}</p>
		<button on:click={clear}>
			<Icon icon="times" noPadding={true}/>
			<span class="sr-only">Clear Toast</span>
		</button>
	</div>
	<p class="message">{toast.message}</p>
	{#if toast.technicalDetails}
		<pre>
			{toast.technicalDetails}
		</pre>
	{/if}
</div>

<script>
	import {clearToast} from './toast';
	import Icon from './Icon.svelte';

	export let toast;

	function clear() {
		clearToast(toast.id);
	}
</script>