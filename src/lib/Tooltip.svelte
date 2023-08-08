<style lang="scss">
	.sx-tooltip {
		background: var(--sx-gray-900);
		padding: var(--sx-spacing-2);
		border-radius: 6px;
		font-size: var(--sx-font-size-2);
	}
	.sx-floating-ui {
		z-index: 10000000000;
	}
	.sx-tooltip-arrow {
		position: absolute;
		transform: rotate(45deg);
		width: 10px;
		height: 10px;
		background: var(--sx-gray-900);
		z-index: -1;
		pointer-events: none;
	}
</style>

{#if showTooltip}
	<Portal>
		<div class="sx-floating-ui" bind:this={tooltipEl} in:fade={inFadeArgs} out:fade={outFadeArgs}>
			<div class="sx-tooltip">
				<slot name="tooltip" />
				{title}
			</div>
			<div class="sx-tooltip-arrow" bind:this={arrowEl} />
		</div>
	</Portal>
{/if}
<div class="sx-tooltip-root {cl}" use:applyTooltip bind:this={tooltipRoot}>
	<slot />
</div>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import Portal from './Portal.svelte';
	import { computePosition, autoUpdate, autoPlacement, arrow, offset } from '@floating-ui/dom';
	import { onDestroy } from 'svelte';

	export let title = '';
	export let delay = 200;
	export let cl = '';

	const inFadeArgs = { duration: 50, delay },
		outFadeArgs = { duration: 50 };

	let showTooltip = false,
		tooltipEl: HTMLElement,
		arrowEl: HTMLElement,
		tooltipRoot: HTMLElement;

	function applyTooltip(el: HTMLElement) {
		el.addEventListener('mouseenter', () => (showTooltip = true));
		el.addEventListener('mouseleave', () => {
			if (tooltipCleanup) {
				tooltipCleanup();

				tooltipCleanup = null;
			}
			showTooltip = false;
		});
	}

	$: tooltipEl && arrowEl && position(tooltipEl, arrowEl);

	let tooltipCleanup: (() => void) | null = null;

	function position(tooltipEl: HTMLElement, arrowEl: HTMLElement) {
		if (tooltipCleanup) {
			tooltipCleanup();
		}
		// When the floating element is open on the screen
		tooltipCleanup = autoUpdate(tooltipRoot, tooltipEl, async () => {
			const { x, y, middlewareData, placement } = await computePosition(tooltipRoot, tooltipEl, {
				middleware: [offset(arrowEl.offsetWidth), autoPlacement(), arrow({ element: arrowEl })],
			});
			Object.assign(tooltipEl.style, {
				left: `${x}px`,
				top: `${y}px`,
			});

			const side = placement.split('-')[0],
				staticSide = {
					top: 'bottom',
					right: 'left',
					bottom: 'top',
					left: 'right',
				}[side];

			if (middlewareData.arrow) {
				const { x, y } = middlewareData.arrow;

				Object.assign(arrowEl.style, {
					left: x !== null ? `${x}px` : '',
					top: y !== null ? `${y}px` : '',
					right: '',
					bottom: '',
					[staticSide as string]: `${-arrowEl.offsetWidth / 2}px`,
				});
			}
		});
	}

	onDestroy(() => {
		if (tooltipCleanup) {
			tooltipCleanup();
		}
	});
</script>
