<LinkTabList {tabs} {selectedTab} />
<slot />

<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import LinkTabList from '$lib/LinkTabList.svelte';

	$: tabs = [
		{
			title: 'One',
			href: '/link-tabs/one',
		},
		{
			title: 'Two',
			href: '/link-tabs/two',
		},
	];

	let selectedTab = '';
	afterNavigate(() => {
		selectedTab = browser ? tabs.find((tab) => tab.href === location.pathname)?.href ?? '' : '';
	});
</script>
