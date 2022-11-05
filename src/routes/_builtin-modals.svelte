<Fieldset title="Built in modals">
	<p>Prompt result: "{promptResult}"</p>
	<p>Confirm result: "{confirmResult}"</p>
	<button on:click={doConfirm}>Confirm</button>
	<button on:click={doPrompt}>Prompt</button>
	<button on:click={doAlert}>Alert</button>
</Fieldset>

<script lang="ts">
	import { Fieldset, showPromptModal, showConfirmModal, showAlertModal } from '../lib';

	let promptResult = '',
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
			default: promptResult,
		});
	}
</script>
