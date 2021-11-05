<style>
	.swatch {
		height: 5rem;
		width: 5rem;
	}
</style>

{#each colors as color}
	<div class="f-row">
		{#each weights as weight}
			<div class="swatch" style="background-color: var(--shdx-{color}-{weight})" />
		{/each}
	</div>
{/each}

<script lang="ts">
	import { colors } from './util';
	const weights: number[] = [];

	for (let i = 900; i >= 100; i -= 100) {
		weights.push(i);
	}
</script>
