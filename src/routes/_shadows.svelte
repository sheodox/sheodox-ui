<style>
	.light {
		background-color: white;
	}
	.shadow-box {
		height: 5rem;
		width: 5rem;
	}
</style>

<div class="light f-row">
	{#each shadowLevels as level}
		<div class="shadow-box m-6" style="box-shadow: var(--sx-shadow-{level})" />
	{/each}
</div>

<div class="dark f-row">
	{#each shadowLevels as level}
		<div class="shadow-box m-6" style="box-shadow: var(--sx-light-shadow-{level})" />
	{/each}
</div>

<script lang="ts">
	const shadowLevels: number[] = [];

	for (let i = 1; i <= 5; i++) {
		shadowLevels.push(i);
	}
</script>
