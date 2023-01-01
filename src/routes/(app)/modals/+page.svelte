<Fieldset legend="Built in modals">
	<p>Prompt result: "{promptResult}"</p>
	<p>Confirm result: "{confirmResult}"</p>
	<button on:click={doConfirm}>Confirm</button>
	<button on:click={doPrompt}>Prompt</button>
	<button on:click={doAlert}>Alert</button>
</Fieldset>

<Fieldset legend="Custom modal">
	<button on:click={() => (showCustomModal = true)} class="secondary">Show modal</button>
</Fieldset>

{#if showCustomModal}
	<Modal bind:visible={showCustomModal} title="Modal">
		<div class="modal-body">
			<p>This is modal with a lot of text on it. Here is more text to pad it out even more.</p>
		</div>
		<div class="modal-footer">
			<button on:click={() => (showCustomModal = false)}>Close</button>
		</div>
	</Modal>
{/if}

<script lang="ts">
	import { Fieldset, showPromptModal, showConfirmModal, showAlertModal, Modal } from '$lib';

	let showCustomModal = false,
		promptResult: string | null = '',
		confirmResult = false;

	async function doAlert() {
		showAlertModal({ title: 'Alert Example', message: 'This is an alert' });
	}

	async function doConfirm() {
		confirmResult = await showConfirmModal({ title: 'Confirm Example', message: 'Do you want to save?' });
	}

	async function doPrompt() {
		promptResult = await showPromptModal({
			title: 'Prompt Example',
			label: 'Name',
			default: promptResult ?? '',
		});
	}
</script>
