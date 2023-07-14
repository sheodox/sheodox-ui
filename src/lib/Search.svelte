<style lang="scss">
	.input-group {
		background: var(--sx-input-bg);
	}
	.focused {
		outline: 2px solid var(--sx-input-focus-color);
	}
	input {
		outline: none !important;
		border: none !important;
		background: transparent !important;
		transition: opacity 0.2s;
		width: 100%;
	}
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="input-group f-row search-{size}" on:click={() => input?.focus()} class:focused>
	<span class={sizeLarge ? 'm-3' : 'm-2'}>
		<Icon icon="magnifying-glass" />
	</span>
	<input
		{name}
		{placeholder}
		bind:value
		aria-label={label}
		bind:this={input}
		on:focus={() => (focused = true)}
		on:blur={() => (focused = false)}
	/>
</div>

<script lang="ts">
	import Icon from './Icon.svelte';

	export let name = '';
	export let value = '';
	export let label = 'Search';
	export let size: 'normal' | 'large' = 'normal';
	export let placeholder = '';

	$: sizeLarge = size === 'large';

	let input: HTMLInputElement;
	let focused = false;
</script>
