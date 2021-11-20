<style>
	header {
		width: 100%;
		justify-content: space-around;
	}
	header.slim {
		background: var(--shdx-gray-600);
		justify-content: space-between;
		box-shadow: var(--shdx-shadow-1);
	}

	header.centered-branding {
		justify-content: space-around;
	}

	header .branding :global(img),
	header .branding :global(svg) {
		height: 4rem;
		width: 4rem;
		margin: 0 1rem;
	}
	header.slim .branding :global(img),
	header.slim .branding :global(svg) {
		height: 3rem;
		width: 3rem;
	}
	header.slim h1 {
		margin: 0.3rem 0;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.toolbar {
		margin: 0 1rem;
		height: 100%;
	}
	@media (max-width: 960px) {
		header.breakpoint-large {
			flex-direction: column !important;
		}
	}
	@media (max-width: 600px) {
		header.breakpoint-medium {
			flex-direction: column !important;
		}
	}
	h1 a {
		color: var(--shdx-text-color);
		text-decoration: none;
	}
</style>

<header class="row breakpoint-{breakpoint}" class:slim class:centered-branding={!$$slots.nav}>
	<div class="branding row">
		<slot name="logo" />
		<h1>
			{#if href}
				<a {href} on:click={headerClick}>{title}</a>
			{:else}
				{title}
			{/if}
		</h1>
	</div>
	{#if $$slots.nav}
		<div class="toolbar">
			<slot name="nav" />
		</div>
	{/if}
</header>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{ titleclick: void }>();

	export let pageName = '';
	export let appName: string;
	export let href: string = null;
	export let titleClickPreventDefault = false;
	export let breakpoint = 'large';

	$: title = `${pageName ? `${pageName} -` : ''} ${appName}`.trim();

	//slim=true is a minimal header for use in app pages where screen real estate is more important
	//slim=false is bigger with no background, used prominently on landing pages
	export let slim = true;

	function headerClick(e: Event) {
		if (titleClickPreventDefault) {
			e.preventDefault();
		}
		dispatch('titleclick');
	}
</script>
