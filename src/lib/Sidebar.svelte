<style lang="scss">
	$sidebarWidth: 30rem;

	aside {
		$animationSpeed: 0.2s;
		max-width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		right: 0;
		background-color: var(--sx-gray-800);
		/* below modal overlay */
		z-index: 9999;
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
				width: #{$sidebarWidth};
				min-width: #{$sidebarWidth};
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
			width: #{$sidebarWidth};

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
	class:closed={!menuOpen}
	class:open={menuOpen}
	aria-hidden={!menuOpen}
	bind:this={aside}
	class="sx-sidebar"
	class:docked={!asOverlay}
	class:as-overlay={asOverlay}
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

	// a value bound here and the Header component that determines if the sidebar shows
	export let menuOpen: boolean;
	// whether the sidebar should overlay the page or show as part of the page
	export let docked = false;

	let isMobileBreakpoint = false;
	checkWindowWidth();

	$: asOverlay = !docked || isMobileBreakpoint;

	function checkWindowWidth() {
		// can't use `browser` from `$app/environment` because not all consumers of sheodox-ui use sveltekit
		isMobileBreakpoint = typeof window !== 'undefined' && window.innerWidth < 500;
	}

	let aside: HTMLElement;

	function maybeClose(e: MouseEvent) {
		if (asOverlay && menuOpen && aside && !aside.contains(e.target as HTMLElement)) {
			menuOpen = false;
		}
	}
</script>
