<TabList {tabs} bind:selectedTab />

<Tab {selectedTab} tabId="colors">
	<Colors />
</Tab>

<Tab {selectedTab} tabId="badges">
	<Badges />
</Tab>

<Tab {selectedTab} tabId="shadows">
	<Shadows />
</Tab>

<Tab {selectedTab} tabId="toasts">
	<DemoToasts />
</Tab>

<script lang="ts">
	import { TabList, Tab } from '../lib';
	import Colors from './_colors.svelte';
	import Badges from './_badges.svelte';
	import Shadows from './_shadows.svelte';
	import DemoToasts from './_demo-toasts.svelte';

	let selectedTab: string;
	const tabs = [
		{ id: 'badges', title: 'Badges' },
		{ id: 'colors', title: 'Colors' },
		{ id: 'shadows', title: 'Shadows' },
		{ id: 'toasts', title: 'Toasts' },
	];
</script>
