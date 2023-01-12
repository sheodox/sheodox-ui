{#each lines as line}
	<p>{line}</p>
{/each}

<script lang="ts">
	const lines: string[] = [];

	for (let i = 0; i < 200; i++) {
		lines.push('This page is very long because it has a lot of lines of text on it.');
	}
</script>
