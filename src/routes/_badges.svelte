<style>
	span {
		display: inline-block;
	}
</style>

<div class="p-3">
	{#each colors as color}
		<span class="sx-badge-{color}">{color}</span>
	{/each}
</div>

<script lang="ts">
	import { colors } from './_util';
</script>
