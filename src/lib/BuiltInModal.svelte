<style>
	input {
		width: 100%;
	}
</style>

<Modal on:closed={() => cancel()} title={modal.title}>
	<div class="modal-body">
		{#if modal.type === 'alert' || modal.type === 'confirm'}
			<p class="m-0">{modal.message}</p>
		{:else if modal.type === 'prompt'}
			<label>
				{modal.label}
				<br />
				<input bind:value />
			</label>
		{/if}
	</div>
	<div class="modal-footer">
		{#if modal.type === 'confirm'}
			<button on:click={() => cancel()} class="secondary my-0">
				{modal.noPhrase || 'Cancel'}
			</button>
		{/if}
		<button on:click={() => yes()} class="primary my-0">
			{modal.yesPhrase || 'Ok'}
		</button>
	</div>
</Modal>

<script lang="ts">
	import Modal from './Modal.svelte';
	import type { WrappedModal } from './modals';

	export let modal: WrappedModal;
	let value = modal.type === 'prompt' && !!modal.default ? modal.default : '';

	function cancel() {
		if (modal.type === 'confirm' || modal.type === 'prompt') {
			modal.onNo();
		}
	}
	function yes() {
		if (modal.type === 'confirm' || modal.type === 'alert') {
			modal.onYes();
		} else {
			modal.onYes(value);
		}
	}
</script>
