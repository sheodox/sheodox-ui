<style>
	.overlay {
		position: fixed;
		z-index: 10000;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.modal {
		max-width: 90vw;
		border-radius: 0.3rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		max-height: 90vh;
		background: var(--sx-gray-600);
		border: 1px solid var(--sx-gray-500);
	}
	.modal-title {
		display: flex;
		flex-direction: row;
		padding: 1rem 1rem 0 1rem;
	}
	h1,
	button.close {
		align-self: center;
	}
	h1 {
		flex: 1;
	}
	h1 {
		margin: 0;
	}
</style>

<Portal>
	<div class="overlay" on:click={close} on:keydown={keydown}>
		<div class="modal panel" on:click|stopPropagation on:keydown={keydown} style="width: {width}; height: {height};">
			<div class="modal-title header">
				<h1>{title}</h1>
				<button class="close" on:click={close}>
					&times;
					<span class="sr-only">Close modal</span>
				</button>
			</div>
			<slot />
		</div>
	</div>
</Portal>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Portal from './Portal.svelte';

	export let title = '';
	export let visible = false;
	export let width = '';
	export let height = '';

	const dispatch = createEventDispatcher<{ closed: void }>();

	function close() {
		visible = false;
		dispatch('closed');
	}

	function keydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			visible = false;
		}
	}
</script>
