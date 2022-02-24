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

<Tabs />

<script lang="ts">
	import { Header, Toasts } from '../lib';
	import Tabs from './_tabs.svelte';
</script>
