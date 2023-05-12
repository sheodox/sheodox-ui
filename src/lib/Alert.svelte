<style>
	.alert {
		border-radius: 10px;
		font-weight: bold;
	}
	.alert-info {
		background: var(--sx-blue-transparent-faint);
		color: var(--sx-blue-200);
	}
	.alert-warning {
		background: var(--sx-yellow-transparent-faint);
		color: var(--sx-yellow-400);
	}
	.alert-error {
		background: var(--sx-red-transparent-faint);
		color: var(--sx-red-300);
	}
	.alert-success {
		background: var(--sx-green-transparent-faint);
		color: var(--sx-green-400);
	}
	button :global(i) {
		vertical-align: middle;
		display: inline;
	}
</style>

<div class="alert alert-{variant} px-2">
	<div class="f-row justify-content-between align-items-center">
		<div class="p-2" role="alert">
			<slot />
		</div>
		{#if dismissable}
			<button on:click={dismiss} class="small px-2" title="Dismiss">
				<Icon icon="times" variant="icon-only" /> <span class="sr-only">Dismiss</span>
			</button>
		{/if}
	</div>
</div>

<script lang="ts">
	import Icon from './Icon.svelte';
	import { createEventDispatcher } from 'svelte';

	export let variant: 'info' | 'error' | 'warning' | 'success' = 'error';

	const dispatch = createEventDispatcher<{
		dismiss: void;
	}>();

	// used like 'visible' on Modals, so if bound to a boolean variable on the parent component
	// the alert can dismiss itself without *needing* to listen to on:dismiss
	export let visible = true;
	export let dismissable = false;

	function dismiss() {
		dispatch('dismiss');
		visible = false;
	}
</script>
