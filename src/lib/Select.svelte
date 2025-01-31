<style lang="scss">
	div {
		padding: 0.2rem;
		position: relative;
		flex-direction: row;
	}
	.focused {
		outline: 2px solid var(--sx-input-focus-color);
	}
	select {
		outline: none !important;
		border: none !important;
		background: transparent !important;
		transition: opacity 0.2s;
		padding: 0.7rem 0 0;
		width: 100%;
		appearance: none;
		padding-right: 1.4rem;
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
	.emphasized-label select {
		opacity: 0;
	}
	.invalid {
		border-color: var(--sx-red-transparent);
		background-color: var(--sx-red-transparent-faint);
	}
	.sx-select {
		height: 38px;
	}
	.select-icon {
		position: absolute;
		right: 0;

		:global(i) {
			vertical-align: middle;
		}
	}
</style>

<div
	class="sx-select input-group p-0"
	class:focused
	class:muted-label={!emphasizedLabel}
	class:emphasized-label={emphasizedLabel}
	class:invalid={!valid}
>
	<div class="f-column f-1 align-items-center select-input-column">
		<select
			id="sx-select-input-{id}"
			bind:value
			bind:this={selectElement}
			{name}
			{placeholder}
			{required}
			use:focus
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
			on:keyup
			on:keydown
			on:keypress
			on:change
		>
			<slot />
		</select>
		<label for="sx-select-input-{id}">
			{label}
		</label>
		<slot name="append" />
	</div>

	<div class="m-1 muted select-icon" inert>
		<Icon icon="sort" />
	</div>
</div>

<script lang="ts">
	import { genId, focus as focusUtil } from './util';
	import Icon from './Icon.svelte';

	export let value: string | number | undefined = undefined;
	export let placeholder = '';
	export let id = genId();
	export let name = '';
	export let label = '';
	export let required = false;
	export let autofocus = false;
	// kick the element back to the parent component, so they can
	// programatically focus without having to getElementById, useful
	// since the ID used isn't used as-is as the input ID
	export let selectElement: HTMLSelectElement | undefined = undefined;

	// fallback is for SSR so everything isn't invalid by default
	$: valid = !required || (value !== undefined && selectElement?.checkValidity());

	let focused: boolean;

	if (!id) {
		throw new Error(`'id' not provided for text input.`);
	}
	$: emphasizedLabel = (value === '' || value === null) && !focused;

	function focus(el: HTMLSelectElement) {
		if (autofocus) {
			focusUtil(el);
		}
	}
</script>
