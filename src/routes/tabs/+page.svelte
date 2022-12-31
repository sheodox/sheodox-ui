<TabList {tabs} bind:selectedTab />

<Tab {selectedTab} tabId="colors">
	<p>This used to be a tab for colors</p>
</Tab>

<Tab {selectedTab} tabId="badges">
	<p>This used to be a tab for badges</p>
</Tab>

<Tab {selectedTab} tabId="shadows">
	<p>This used to be a tab for shadows</p>
</Tab>

<Tab {selectedTab} tabId="toasts">
	<p>This used to be a tab for toasts</p>
</Tab>

<script lang="ts">
	import { TabList, Tab } from '$lib';

	let selectedTab: string;
	const tabs = [
		{ id: 'badges', title: 'Badges' },
		{ id: 'colors', title: 'Colors' },
		{ id: 'shadows', title: 'Shadows' },
		{ id: 'toasts', title: 'Toasts' },
	];
</script>
