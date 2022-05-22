<style>
	.swatch {
		height: 5rem;
		width: 5rem;
	}
</style>

<div class="m-3">
	{#each colors as color}
		<div class="f-row">
			{#each weights as weight}
				<div class="swatch" style="background-color: var(--sx-{color}-{weight})" />
			{/each}
		</div>
	{/each}
</div>

<script lang="ts">
	import { colors } from './_util';
	const weights: number[] = [];

	for (let i = 900; i >= 100; i -= 100) {
		weights.push(i);
	}
</script>
