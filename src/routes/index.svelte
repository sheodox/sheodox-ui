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

	<br />

	<div style="width: 20rem;" class="f-column gap-3 p-3">
		<TextInput id="text-input-demo-1" value="something">Text Input</TextInput>
		<TextInput id="text-input-demo-2" value="">Text Input</TextInput>
		<Checkbox id="checkbox-demo-1" checked={true}>Checkbox</Checkbox>
		<Checkbox id="checkbox-demo-2" checked={false}>Checkbox</Checkbox>
		<button on:click={() => (showModal = true)} class="secondary">Show modal</button>
	</div>
	<code>some code element</code>

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
	import { Modal, Header, Toasts, TextInput, Checkbox } from '../lib';
	import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
	import Tabs from './_tabs.svelte';

	let showModal = false;
</script>
