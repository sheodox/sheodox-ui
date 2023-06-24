<p>There's a tooltip element!</p>
<p>This pushes down the page!!</p>

<div class="f-column align-items-start">
	{#each placements as place}
		<ButtonExample text={place} placement={place} />
	{/each}
</div>

<script lang="ts">
	import ButtonExample from './ButtonExample.svelte';
	import type { Placement } from '@floating-ui/dom';

	const placements: Placement[] = ['top', 'bottom', 'left', 'right'];
</script>
