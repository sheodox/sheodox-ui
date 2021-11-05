<style>
	input {
		opacity: 0;
	}
	input:focus + label > .checkbox-icon > :global(i) {
		outline: 0.1rem solid var(--shdx-accent-blue);
		border-radius: 3px;
	}
	.checkbox-icon {
		margin-left: -1.2rem;
		color: var(--shdx-text-color);
	}
	.checkbox-icon :global(i) {
		padding: 1px;
	}
	.checkbox-icon.checked {
		color: var(--shdx-accent-blue);
	}
	.disabled {
		color: var(--shdx-muted);
	}
</style>

<div>
	<input type="checkbox" id="checkbox-{id}" bind:checked {disabled} on:change />
	<label for="checkbox-{id}" class:disabled>
		<span class="checkbox-icon" class:checked>
			<Icon icon={checked ? 'check-square' : 'square'} noPadding={true} />
		</span>
		<slot />
	</label>
</div>

<script lang="ts">
	import Icon from './Icon.svelte';

	export let id: string;
	export let checked = false;
	export let disabled = false;

	if (!id) {
		throw new Error(`'id' not provided for checkbox.`);
	}
</script>
