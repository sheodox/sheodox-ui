<style>
	.arrow {
		transition: transform 0.2s;
	}
	.rotate {
		transform: rotate(-90deg);
	}
	.open {
		transition: background 0.2s;
		background: var(--sx-gray-transparent);
		border-radius: 5px;
	}
	.accordion-toggle-button {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>

<div class="f-column" class:open>
	<button class="accordion-toggle-button {buttonClasses}" on:click={toggle} type="button">
		<slot name="title" />
		<div class="arrow" class:rotate={open}>
			<Icon icon="chevron-left" variant="icon-only" />
		</div>
	</button>

	<div use:animateHeight={open} class="p-2">
		<slot />
	</div>
</div>

<script lang="ts">
	import Icon from './Icon.svelte';
	import { animateHeight } from './util';

	export let open = false;
	export let buttonClasses = 'secondary';

	function toggle() {
		open = !open;
	}
</script>
