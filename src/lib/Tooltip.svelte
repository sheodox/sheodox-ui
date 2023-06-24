<style lang="scss">
	.sx-tooltip {
		background: var(--sx-gray-600);
		padding: var(--sx-spacing-2);
		border-radius: 6px;
		filter: drop-shadow(0 0 2px var(--sx-gray-300));
		font-size: var(--sx-font-size-2);
	}
	.sx-floating-ui {
		z-index: 10000000000;
	}
	svg {
		position: absolute;
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
		<div class="sx-floating-ui" use:position in:fade={{ duration: 50, delay }} out:fade={{ duration: 50 }}>
			<div class="sx-tooltip m-3 placement-{placement}">
				<slot name="tooltip" />
				{title}
				<svg viewBox="0 0 10 10" height="10px" width="10px">
					<polygon points="0,0 10,0 5,10" />
				</svg>
			</div>
		</div>
	</Portal>
{/if}
<div class="sx-tooltip-root" use:applyTooltip bind:this={tooltipRoot}>
	<slot />
</div>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import Portal from './Portal.svelte';
	import { computePosition, autoUpdate } from '@floating-ui/dom';
	import type { Placement } from '@floating-ui/dom';

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
		// When the floating element is open on the screen
		const cleanup = autoUpdate(tooltipRoot, el, async () => {
			const { x, y } = await computePosition(tooltipRoot, el, { placement });
			Object.assign(el.style, {
				left: `${x}px`,
				top: `${y}px`,
			});
		});

		return {
			destroy: cleanup,
		};
	}
</script>
