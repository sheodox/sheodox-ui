<style>
	div {
		padding: 0.2rem;
		position: relative;
		flex-direction: row;
	}
	.focused {
		outline: 2px solid var(--sx-input-focus-color);
	}
	input {
		outline: none !important;
		border: none !important;
		background: transparent !important;
		transition: opacity 0.2s;
		padding: 0.7rem 0 0;
		width: 100%;
	}
	label {
		transition: transform 0.2s ease-in-out, margin 0.2s ease-in-out, color 0.2s ease-in-out;
		display: block;
		min-height: 0.5rem;
		cursor: text;
		position: absolute;
		top: 0;
		font-size: 1rem;
		pointer-events: none;
		transform-origin: top left;
	}
	.muted-label label {
		transform: scale(0.7);
		color: var(--sx-gray-75);
	}
	.emphasized-label label {
		transform: scale(1);
		margin-top: 0.5rem;
		color: var(--sx-gray-50);
		padding-left: var(--sx-spacing-1);
	}
	.emphasized-label input {
		opacity: 0;
	}
	.invalid {
		border-color: var(--sx-red-transparent);
		background-color: var(--sx-red-transparent-faint);
	}
</style>

<div
	class="input-group"
	class:focused
	class:muted-label={!emphasizedLabel}
	class:emphasized-label={emphasizedLabel}
	class:invalid={!valid}
>
	{#if type === 'text'}
		<input
			id="text-input-{id}"
			type="text"
			bind:value
			bind:this={inputElement}
			{name}
			{pattern}
			{placeholder}
			{autocomplete}
			{maxlength}
			{minlength}
			{required}
			use:focus
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup
			on:keydown
			on:keypress
			on:change
		/>
	{:else if type === 'number'}
		<input
			id="text-input-{id}"
			type="number"
			bind:value
			bind:this={inputElement}
			{name}
			{min}
			{max}
			{step}
			{required}
			{placeholder}
			{autocomplete}
			use:focus
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup
			on:keydown
			on:keypress
			on:change
		/>
	{:else if type === 'password'}
		<input
			id="text-input-{id}"
			type="password"
			bind:value
			bind:this={inputElement}
			{name}
			{placeholder}
			{autocomplete}
			{required}
			{maxlength}
			{minlength}
			use:focus
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup
			on:keydown
			on:keypress
			on:change
		/>
	{:else if type === 'email'}
		<input
			id="text-input-{id}"
			type="email"
			bind:value
			bind:this={inputElement}
			{name}
			{placeholder}
			{autocomplete}
			{maxlength}
			{minlength}
			{required}
			use:focus
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup
			on:keydown
			on:keypress
			on:change
		/>
	{/if}
	<label for="text-input-{id}">
		<slot />
	</label>
	<slot name="append" />
</div>

<script lang="ts">
	import { genId, focus as focusUtil } from './util';

	export let value: string | number;
	export let placeholder = '';
	export let id = genId();
	export let name = '';
	export let pattern: string | undefined = undefined;
	export let autocomplete = 'off';
	export let autofocus = false;
	export let autoselect = false;
	export let type: 'text' | 'password' | 'email' | 'number' = 'text';
	export let min = 0;
	export let max = 100;
	export let step = 1;
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let required = false;
	// kick the element back to the parent component, so they can
	// programatically focus without having to getElementById, useful
	// since the ID used isn't used as-is as the input ID
	export let inputElement: HTMLInputElement | undefined = undefined;

	// fallback is for SSR so everything isn't invalid by default
	$: valid = (value !== undefined && inputElement?.checkValidity()) ?? true;

	let focused: boolean;

	if (!id) {
		throw new Error(`'id' not provided for text input.`);
	}
	$: emphasizedLabel = (value === '' || value === null) && !focused;

	function focus(el: HTMLInputElement) {
		if (autofocus) {
			focusUtil(el);
		}
		if (autoselect) {
			el.select();
		}
	}
</script>
