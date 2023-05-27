<p>There's a tooltip element!</p>
<p>This pushes down the page!!</p>

{#each placements as place}
	<ButtonExample text={place} placement={place} />
{/each}

<script lang="ts">
	import ButtonExample from './ButtonExample.svelte';
	import type { Placement } from '@popperjs/core';

	const placements: Placement[] = ['top', 'bottom', 'left', 'right'];
</script>
