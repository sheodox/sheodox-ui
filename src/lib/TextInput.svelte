<style>
	div {
		padding: 0.2rem;
		position: relative;
		flex-direction: row;
	}
	.focused {
		outline: 1px solid var(--shdx-input-focus-color);
	}
	input {
		outline: none !important;
		border: none !important;
		background: transparent !important;
		transition: opacity 0.2s;
		padding: 0.7rem 0 0.4rem;
		width: 100%;
	}
	label {
		transition: transform 0.2s ease-in-out, margin 0.2s ease-in-out, color 0.2s ease-in-out;
		display: block;
		min-height: 0.7rem;
		cursor: text;
		position: absolute;
		top: 0;
		font-size: 1rem;
		pointer-events: none;
		transform-origin: top left;
	}
	.muted-label label {
		transform: scale(0.7);
		color: var(--shdx-gray-75);
	}
	.emphasized-label label {
		transform: scale(1);
		margin-top: 0.7rem;
		color: var(--shdx-gray-50);
	}
	.emphasized-label input {
		opacity: 0;
	}
</style>

<div class="input-group" class:focused class:muted-label={!emphasizedLabel} class:emphasized-label={emphasizedLabel}>
	{#if type === 'text'}
		<input
			id="text-input-{id}"
			type="text"
			bind:value
			{placeholder}
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup
			on:keydown
			on:keypress
		/>
	{:else if type === 'password'}
		<input
			id="text-input-{id}"
			type="password"
			bind:value
			{placeholder}
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup
			on:keydown
			on:keypress
		/>
	{:else if type === 'email'}
		<input
			id="text-input-{id}"
			type="email"
			bind:value
			{placeholder}
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup
			on:keydown
			on:keypress
		/>
	{/if}
	<label for="text-input-{id}">
		<slot />
	</label>
	<slot name="append" />
</div>

<script lang="ts">
	export let value: string | number;
	export let placeholder = '';
	export let id: string;
	export let type: 'text' | 'password' | 'email' = 'text';

	let focused: boolean;

	if (!id) {
		throw new Error(`'id' not provided for text input.`);
	}
	$: emphasizedLabel = !value && !focused;
</script>
