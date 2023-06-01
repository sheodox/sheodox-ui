<style>
	.sx-grid {
		gap: var(--sx-arg-grid-gap, var(--sx-spacing-4));
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--sx-arg-grid-basis, 18rem), 1fr));
		flex: 1;
	}
</style>

<div class="sx-grid" style="--sx-arg-grid-gap: var(--sx-spacing-{gap}); --sx-arg-grid-basis:{basis}">
	<slot />
</div>

<script lang="ts">
	export let gap = 4;
	export let basis = '18rem';
</script>
