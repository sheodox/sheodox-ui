<style>
	main {
		max-width: 95%;
		width: 80rem;
		margin: 0 auto;
	}
</style>

<svelte:head>
	<title>sheodox-ui</title>
</svelte:head>

<Header appName="sheodox-ui">
	<nav slot="headerCenter">
		<ul>
			<li>
				<a href="/" class="active">Link 1</a>
			</li>
			<li>
				<a href="/">Link 2</a>
			</li>
			<li>
				<a href="/">Link 2</a>
			</li>
			<li>
				<a href="/">Link 2</a>
			</li>
		</ul>
	</nav>
	<nav slot="headerEnd">
		<ul>
			<li>
				<a href="/">Link</a>
			</li>
		</ul>
	</nav>
</Header>

<Toasts />

<Modals />

<main class="my-4">
	<table>
		<thead>
			<tr>
				<th>Normal</th>
				<th>Disabled</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><button>Regular button</button></td>
				<td><button disabled>Regular button</button></td>
			</tr>
			<tr>
				<td><button class="secondary">Secondary button</button></td>
				<td><button class="secondary" disabled>Secondary button</button></td>
			</tr>
			<tr>
				<td><button class="primary">Primary button</button></td>
				<td><button class="primary" disabled>Primary button</button></td>
			</tr>
			<tr>
				<td><button class="danger">Danger button</button></td>
				<td><button class="danger" disabled>Danger button</button></td>
			</tr>
			<tr>
				<td><button class="galaxy">Galaxy button</button></td>
				<td><button class="galaxy" disabled>Galaxy button</button></td>
			</tr>
			<tr>
				<td>
					<button aria-pressed="true"><span>Pressed button</span></button>
				</td>
				<td>
					<button aria-pressed="true" disabled><span>Pressed button</span></button>
				</td>
			</tr>
		</tbody>
	</table>

	<div class="f-row gap-3 m-3">
		<Fieldset title="Normal fieldset">
			<p>this is some fieldset content</p>
		</Fieldset>

		<Fieldset title="Small fieldset" variant="small">
			<p>this is some fieldset content</p>
		</Fieldset>

		<Fieldset title="Small fieldset" variant="small" centeredLegend mutedLegend>
			<p>this one has different styles</p>
		</Fieldset>
	</div>

	<br />

	<div style="width: 20rem;" class="f-column gap-3 p-3">
		<TextInput value="something">Text Input</TextInput>
		<TextInput value="">Text Input</TextInput>
		<TextInput value="0" type="number">Number Input</TextInput>
		<Checkbox checked={true}>Checkbox</Checkbox>
		<Checkbox checked={false}>Checkbox</Checkbox>
		<button on:click={() => (showModal = true)} class="secondary">Show modal</button>

		<BuiltInModals />
	</div>
	<code>some code element</code>

	<br />

	<div class="f-column gap-3">
		<label for="test-progress-minimal">Minimal Progress</label>
		<Progress id="test-progress-minimal" max={100} min={0} value={50} variant="minimal" />

		<label for="test-progress-slim">Slim Progress</label>
		<Progress id="test-progress-slim" max={100} min={0} value={50} variant="slim" />

		<label for="test-progress">Progress</label>
		<Progress id="test-progress" max={100} min={0} value={50} />

		<label for="test-progress-moving">Moving Progress</label>
		<Progress id="test-progress" max={100} min={0} value={movingProgressValue} />

		<label for="test-progress-empty">Empty Progress</label>
		<Progress id="test-progress-empty" max={100} min={0} value={0} />

		<label for="test-progress-max">Complete Progress</label>
		<Progress id="test-progress-max" max={100} min={0} value={100} />
	</div>
	<Tabs />
</main>

{#if showModal}
	<Modal bind:visible={showModal} title="Modal">
		<div class="modal-body">
			<p>This is modal with a lot of text on it. Here is more text to pad it out even more.</p>
		</div>
		<div class="modal-footer">
			<button on:click={() => (showModal = false)}>Close</button>
		</div>
	</Modal>
{/if}

<script lang="ts">
	import { Fieldset, Modal, Modals, Header, Toasts, TextInput, Checkbox, Progress } from '../lib';
	import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
	import BuiltInModals from './_builtin-modals.svelte';
	import Tabs from './_tabs.svelte';

	let movingProgressValue = 0;
	setInterval(() => {
		movingProgressValue = (movingProgressValue + Math.random() * 30) % 100;
	}, 1000);

	let showModal = false;
</script>
