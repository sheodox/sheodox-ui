<style>
	span {
		display: inline-block;
	}
</style>

<div class="p-3">
	{#each colors as color}
		<p><span class="sx-badge-{color}">.sx-badge-{color}</span></p>
	{/each}
</div>

<script lang="ts">
	import { colors } from '../_util';
</script>
