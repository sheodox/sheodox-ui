<style lang="scss">
	.divider {
		color: var(--sx-gray-75);
	}
	a {
		color: var(--sx-gray-75);
		font-weight: 500;
		&:hover {
			color: white;
		}
	}
	.last {
		color: white;
		font-weight: 600;
	}
</style>

<div class="breadcrumbs f-row f-wrap gap-2 align-items-center">
	{#each links as link, index}
		{#if index > 0}<span class="sx-font-size-1 divider"><Icon icon="angle-right" variant="icon-only" /></span>{/if}
		{#if link.href && index < links.length - 1}
			<a href={link.href}>{link.text}</a>
		{:else}
			<span class="last">{link.text}</span>
		{/if}
	{/each}
</div>

<script lang="ts">
	import Icon from './Icon.svelte';
	export let links: { href?: string; text: string }[];
</script>
