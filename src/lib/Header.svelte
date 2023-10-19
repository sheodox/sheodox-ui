<style lang="scss">
	header {
		width: 100%;
		justify-content: space-around;
		h1 {
			font-size: var(--sx-font-size-9);
		}
	}
	header.slim {
		justify-content: space-between;
		backdrop-filter: blur(10px);
		z-index: 10;
		top: 0;

		:global(.sx-theme-light) & {
			background: rgba(255, 255, 255, 0.2);
		}
		:global(.sx-theme-dark) & {
			background: rgba(0, 0, 0, 0.2);
		}
		h1 {
			margin: 0.3rem 0;
			font-weight: normal;
			font-size: var(--sx-font-size-5);
		}
	}

	header.no-toolbar {
		justify-content: space-around;
	}

	header.has-toolbar {
		display: grid;
		grid-template-columns: repeat(3, 1fr);

		.header-center {
			margin: 0 auto;
		}
		.header-end {
			margin-left: auto;
		}
	}

	header .branding {
		:global(img),
		:global(svg) {
			height: 4rem;
			width: 4rem;
			margin: 0 var(--sx-spacing-2);
		}
	}
	header.slim .branding {
		:global(img),
		:global(svg) {
			height: 2rem;
			width: 2rem;
		}
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	@media (max-width: 960px) {
		.has-toolbar .branding {
			flex-basis: 100%;
		}
		header.has-toolbar {
			display: flex;

			.header-center,
			.header-end {
				margin: 0;
			}
		}
	}
	h1 a {
		color: var(--sx-text-color);
		text-decoration: none;
	}
	.sx-header-menu-trigger {
		border-radius: 50%;
	}
</style>

<header
	class="row f-wrap breakpoint-{breakpoint} {$$slots.headerCenter || $$slots.headerEnd ? 'has-toolbar' : 'no-toolbar'}"
	style:position
	class:slim
>
	<div class="branding row px-3">
		{#if showMenuTrigger}
			<button
				on:click|stopPropagation={() => (menuOpen = !menuOpen)}
				aria-pressed={menuOpen}
				class="sx-header-menu-trigger"
				use:ripple
			>
				<Icon icon="bars" />
				<span class="sr-only">{menuOpen ? 'Close' : 'Open'} menu</span>
			</button>
		{/if}
		<slot name="logo" />
		<h1>
			{#if href}
				<a {href} on:click={headerClick}>{title}</a>
			{:else}
				{title}
			{/if}
		</h1>
	</div>
	{#if $$slots.headerCenter || $$slots.headerEnd}
		<div class="px-3 header-center">
			<slot name="headerCenter" />
		</div>
		<div class="px-3 header-end">
			<slot name="headerEnd" />
		</div>
	{/if}
</header>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from './Icon.svelte';
	import { ripple } from './util';
	const dispatch = createEventDispatcher<{ titleclick: void }>();

	export let pageName = '';
	export let appName: string;
	export let href: string | null = null;
	export let titleClickPreventDefault = false;
	export let breakpoint = 'large';
	export let showMenuTrigger = false;
	export let menuOpen = false;
	export let position = 'sticky';
	//slim=true is a minimal header for use in app pages where screen real estate is more important
	//slim=false is bigger with no background, used prominently on landing pages
	export let slim = true;

	$: title = `${pageName ? `${pageName} -` : ''} ${appName}`.trim();

	function headerClick(e: Event) {
		if (titleClickPreventDefault) {
			e.preventDefault();
		}
		dispatch('titleclick');
	}
</script>
