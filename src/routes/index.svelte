<svelte:head>
	<title>sheodox-ui</title>
</svelte:head>
<Header appName="sheodox-ui" />
<Toasts />

<Tabs />

<script lang="ts">
	import { Header, Toasts } from '../lib';
	import Tabs from './_tabs.svelte';
</script>
