<style lang="scss">
	aside {
		$animationSpeed: 0.2s;
		max-width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		right: 0;
		background-color: var(--sx-gray-800);
		/* below modal overlay and menu buttons */
		z-index: 999;
		transition: transform #{$animationSpeed};
		overflow-y: auto;

		.sx-sidebar-close-button {
			border-radius: 50%;
		}

		&.docked {
			/* 48px is the height of the header, give it the full remaining height
				without extending below the bottom of the viewport */
			height: calc(100vh - 48px);
			&.open {
				width: var(--sx-sidebar-width);
				min-width: var(--sx-sidebar-width);
				transform: translateX(0);
			}

			&.closed {
				width: 0rem;
				transform: translateX(-100%);
				overflow: hidden;
			}
		}

		&.as-overlay {
			position: fixed;
			width: var(--sx-sidebar-width);

			&.open {
				transform: translateX(0);
			}

			&.closed {
				transform: translateX(-100%);
			}
		}
	}
</style>

<aside
	bind:this={aside}
	class="sx-sidebar"
	class:closed={!menuOpen}
	class:open={menuOpen}
	aria-hidden={!menuOpen}
	class:docked={!asOverlay}
	class:as-overlay={asOverlay}
	style="--sx-sidebar-width: {width}"
>
	{#if asOverlay}
		<div class="py-1 px-3 f-row sx-font-size-7 sx-sidebar-header">
			<button on:click={() => (menuOpen = !menuOpen)} aria-pressed class="sx-sidebar-close-button">
				<Icon icon="bars" variant="icon-only" />
				<span class="sr-only">{menuOpen ? 'Close' : 'Open'} menu</span>
			</button>
			<slot name="header" />
		</div>
	{/if}
	<slot />
</aside>

<svelte:body on:click={maybeClose} />

<svelte:window on:resize={checkWindowWidth} />

<script lang="ts">
	import Icon from './Icon.svelte';
	import { sidebarAssumeMobilePx } from './util';

	// a value bound here and the Header component that determines if the sidebar shows
	export let menuOpen: boolean;
	// whether the sidebar should overlay the page or show as part of the page
	export let docked = false;

	export let width = '20rem';

	let isMobileBreakpoint = false;
	checkWindowWidth();

	$: asOverlay = !docked || isMobileBreakpoint;

	function checkWindowWidth() {
		// can't use `browser` from `$app/environment` because not all consumers of sheodox-ui use sveltekit
		isMobileBreakpoint = typeof window !== 'undefined' && window.innerWidth < sidebarAssumeMobilePx;
	}

	let aside: HTMLElement;

	function maybeClose(e: MouseEvent) {
		if (asOverlay && menuOpen && aside && !aside.contains(e.target as HTMLElement)) {
			menuOpen = false;
		}
	}
</script>
