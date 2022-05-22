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

<button>Regular button</button>
<button class="primary">Primary button</button>
<button class="galaxy">Galaxy button</button>
<button aria-pressed="true"><span>Pressed button</span></button>

<br />

<div style="width: 20rem;" class="f-column gap-3 p-3">
	<TextInput id="text-input-demo-1" value="something">Text Input</TextInput>
	<TextInput id="text-input-demo-2" value="">Text Input</TextInput>
	<Checkbox id="checkbox-demo-1" checked={true}>Checkbox</Checkbox>
	<Checkbox id="checkbox-demo-2" checked={false}>Checkbox</Checkbox>
</div>

<Tabs />

<script lang="ts">
	import { Header, Toasts, TextInput, Checkbox } from '../lib';
	import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
	import Tabs from './_tabs.svelte';
</script>
