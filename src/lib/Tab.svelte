<style>
	.tab {
		display: none;
	}
	.tab.selected {
		display: block;
	}
</style>

<div class="tab" id="tab-content-{tabId}" class:selected aria-labelledby="tab-{tabId}" role="tabpanel">
	{#if selected}
		<slot />
	{/if}
</div>

<script lang="ts">
	export let tabId: string;
	export let selectedTab: string;

	$: selected = selectedTab === tabId;
</script>
