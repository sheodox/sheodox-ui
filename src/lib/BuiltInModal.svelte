<Modal on:closed={() => cancel()} title={modal.title}>
	<div class="modal-body">
		{#if modal.type === 'alert' || modal.type === 'confirm'}
			<p class="m-0">{modal.message}</p>
		{:else if modal.type === 'prompt'}
			<TextInput bind:value autofocus autoselect on:keydown={maybeSubmit}>{modal.label}</TextInput>
		{/if}
	</div>
	<div class="modal-footer">
		{#if modal.type === 'confirm' || modal.type === 'prompt'}
			<button on:click={() => cancel()} class="secondary my-0" bind:this={noButton}>
				{modal.noPhrase || 'Cancel'}
			</button>
		{/if}
		<button on:click={() => yes()} class="primary my-0" bind:this={okButton}>
			{modal.yesPhrase || 'Ok'}
		</button>
	</div>
</Modal>

<script lang="ts">
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';
	import TextInput from './TextInput.svelte';
	import type { WrappedModal } from './modals';

	export let modal: WrappedModal;
	let value = modal.type === 'prompt' && !!modal.default ? modal.default : '',
		promptInput: HTMLInputElement,
		okButton: HTMLButtonElement,
		noButton: HTMLButtonElement;

	function cancel() {
		if ((modal.type === 'confirm' || modal.type === 'prompt') && modal.onNo) {
			modal.onNo();
		} else if (modal.type === 'alert') {
			// alert modals only have 'Ok'
			modal.onYes?.();
		}
	}
	function yes() {
		if (!modal.onYes) {
			return;
		}

		if (modal.type === 'confirm' || modal.type === 'alert') {
			modal.onYes();
		} else {
			modal.onYes(value);
		}
	}

	function maybeSubmit(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			yes();
		} else if (e.key === 'Escape') {
			cancel();
		}
	}

	onMount(() => {
		// confirms
		if (noButton) {
			noButton.focus();
			return;
		}
		// alerts
		if (okButton) {
			okButton.focus();
		}
	});
</script>
