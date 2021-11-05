<style>
	span {
		display: inline-block;
	}
</style>

<div>
	{#each colors as color}
		<span class="p-1 m-3 shdx-badge-{color}">{color}</span>
	{/each}
</div>

<script lang="ts">
	import { colors } from './util';
</script>
