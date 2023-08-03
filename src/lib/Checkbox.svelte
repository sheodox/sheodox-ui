<style>
	input {
		opacity: 0;
	}
	input:focus + label > .checkbox-icon > :global(i) {
		outline: 2px solid var(--sx-input-focus-color);
		outline-offset: 1px;
		border-radius: 3px;
	}
	.checkbox-icon {
		margin-left: -14px;
		color: var(--sx-text-color);
	}
	.checkbox-icon :global(i) {
		padding: 1px;
	}
	.checkbox-icon.checked {
		color: var(--sx-blue-500);
	}
	.disabled {
		color: var(--sx-muted);
	}
</style>

<div>
	<input type="checkbox" id="checkbox-{id}" bind:checked {disabled} on:change {name} /><label
		for="checkbox-{id}"
		class:disabled
		><span class="checkbox-icon" class:checked>
			<Icon icon={checked ? 'check-square' : 'square'} variant={checked ? 'solid' : 'regular'} />
		</span>
		<slot />
	</label>
</div>

<script lang="ts">
	import Icon from './Icon.svelte';
	import { genId } from './util';

	export let id = genId();
	export let checked = false;
	export let disabled = false;
	export let name = '';

	if (!id) {
		throw new Error(`'id' not provided for checkbox.`);
	}
</script>
