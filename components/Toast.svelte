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
		background: var(--shdx-accent-red);
	}
	.info {
        background: var(--shdx-panel-header-bg-light);
	}
	pre {
		overflow: auto;
		font-size: 0.7rem;
	}
	button {
		padding: 0.3rem;
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
    <p class="message">
		{#if toast.href}
			<a href={toast.href}>{toast.message}</a>
		{:else}
			{toast.message}
		{/if}
	</p>
	{#if toast.technicalDetails}
		<pre>
			{toast.technicalDetails}
		</pre>
	{/if}
	{#if toast.progress}
		<Progress max={toast.max} min={toast.min} value={toast.value} id="toast-progress-id-{toast.id}" />
	{/if}
</div>

<script>
	import {clearToast} from './toast';
	import Progress from './Progress.svelte';
	import Icon from './Icon.svelte';

	export let toast;

	function clear() {
		clearToast(toast.id);
	}
</script>