<style lang="scss">
	.tooltip {
		background: var(--sx-gray-600);
		padding: var(--sx-spacing-2);
		border-radius: 6px;
		z-index: 1000000;
		/* border: 1px solid var(--sx-gray-transparent-lighter); */
		//filter: drop-shadow(0, 0, 5px var(--sx-gray-transparent-lighter));
		filter: drop-shadow(0 0 2px var(--sx-gray-300));
		font-size: var(--sx-font-size-2);
		position: relative;
	}
	svg {
		position: absolute;
	}
	.tooltip-root {
		align-self: start;
	}
	.placement- {
		&top svg {
			bottom: 0;
			left: 50%;
			transform: translate(-50%, 75%);
		}
		&bottom svg {
			top: 0;
			left: 50%;
			transform: translate(-50%, -75%) rotate(180deg);
		}
		&left svg {
			top: 50%;
			left: 100%;
			transform: translate(-25%, -50%) rotate(270deg);
		}
		&right svg {
			top: 50%;
			left: 0;
			transform: translate(-75%, -50%) rotate(90deg);
		}
	}
	polygon {
		fill: var(--sx-gray-600);
	}
</style>

{#if showTooltip}
	<Portal>
		<div
			class="tooltip placement-{placement} m-3"
			use:position
			in:fade={{ duration: 50, delay }}
			out:fade={{ duration: 50 }}
		>
			<slot name="tooltip" />
			{title}
			<svg viewBox="0 0 10 10" height="10px" width="10px">
				<polygon points="0,0 10,0 5,10" />
			</svg>
		</div>
	</Portal>
{/if}
<div class="tooltip-root" use:applyTooltip bind:this={tooltipRoot}>
	<slot />
</div>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createPopper } from '@popperjs/core/lib/popper-lite';
	import Portal from './Portal.svelte';
	import type { Placement } from '@popperjs/core';

	export let title = '';
	export let placement: Placement = 'top';
	export let delay = 200;

	let showTooltip = false,
		tooltipRoot: HTMLElement;

	function applyTooltip(e: HTMLElement) {
		[...e.children].forEach((el) => {
			el.addEventListener('mouseenter', () => (showTooltip = true));
			el.addEventListener('mouseleave', () => (showTooltip = false));
		});
	}

	function position(el: HTMLElement) {
		createPopper(tooltipRoot, el, {
			placement,
		});
	}
</script>
