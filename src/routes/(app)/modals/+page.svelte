<Fieldset legend="Built in modals">
	<p>Prompt result: "{promptResult}"</p>
	<p>Confirm result: "{confirmResult}"</p>
	<button on:click={doConfirm}>Confirm</button>
	<button on:click={doPrompt}>Prompt</button>
	<button on:click={doAlert}>Alert</button>
</Fieldset>

<Fieldset legend="Custom modal">
	<button on:click={() => (showCustomModal = true)} class="secondary">Show Modal</button>
	<button on:click={() => (showSizedModal = true)} class="secondary">Show Sized Modal</button>
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

{#if showSizedModal}
	<Modal width="400px" height="400px" bind:visible={showSizedModal} title="Sized">
		<div class="modal-body">
			<TabList {tabs} bind:selectedTab={selectedSizedModalTab} />
			<Tab selectedTab={selectedSizedModalTab} tabId="long">
				<p>
					This is a super super super super super super super super super super super super super super super super
					super super super super super super super super super super super super super super super super super super
					super super super super super super super super super super super super super super super super super super
					super super super super super super super super super super super super super super super super super super
					super super super super super super super super super super super long tab.
				</p>
			</Tab>
			<Tab selectedTab={selectedSizedModalTab} tabId="short">
				<p>Short!</p>
			</Tab>
		</div>
	</Modal>
{/if}

<script lang="ts">
	import { Fieldset, showPromptModal, showConfirmModal, showAlertModal, Modal, TabList, Tab } from '$lib';

	let showCustomModal = false,
		showSizedModal = false,
		selectedSizedModalTab: string,
		promptResult: string | null = '',
		confirmResult = false;

	const tabs = [
		{
			id: 'long',
			title: 'Long',
		},
		{
			id: 'short',
			title: 'Short',
		},
	];

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
