<style lang="scss">
	.arrow {
		transition: transform 0.2s;
	}
	.sx-accordion.open {
		transition: background 0.2s;
		background: var(--sx-gray-transparent);
		border-radius: 5px;
	}
	.accordion-toggle-button {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.rotate {
			transform: rotate(-90deg);
		}
	}

	.variant-horizontal {
		flex-direction: row;
		.rotate {
			transform: rotateY(180deg);
		}
	}
</style>

<div class="sx-accordion f-column variant-{variant}" class:open>
	<button class="accordion-toggle-button {buttonClasses}" on:click={toggle} type="button">
		<slot name="title" />
		<div class="arrow ml-2" class:rotate={open}>
			<Icon icon="chevron-left" />
		</div>
	</button>

	{#if variant === 'vertical'}
		<div use:animateHeight={open} class="p-2">
			<slot />
		</div>
	{:else if variant === 'horizontal'}
		<div class="px-2 f-row align-items-center" class:d-none={!open}>
			<slot />
		</div>
	{/if}
</div>

<script lang="ts">
	import Icon from './Icon.svelte';
	import { animateHeight } from './util';

	export let open = false;
	export let buttonClasses = 'secondary';
	export let variant: 'vertical' | 'horizontal' = 'vertical';

	function toggle() {
		open = !open;
	}
</script>
