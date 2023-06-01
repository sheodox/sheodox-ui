<Layout>
	<h1>Default layout size</h1>

	<div class="f-row gap-2">
		<TextInput bind:value={gridGap} type="number" min={1} max={15} placeholder="--sx-spacing number">Grid gap</TextInput
		>
		<TextInput bind:value={gridBasis} type="number" min={1} max={100} placeholder="rem">Grid basis (rem)</TextInput>
	</div>
</Layout>

{#each layouts as l}
	<Layout size={l.size}>
		<h1>Layout {l.size}</h1>
		<Grid gap={gridGap} basis={gridBasis + 'rem'}>
			{#each l.items as item}
				<div class="card p-6">{item}</div>
			{/each}
		</Grid>
	</Layout>
{/each}

<script lang="ts">
	import { Layout, Grid, TextInput } from '$lib';

	const layouts = ['narrow', 'medium', 'wide'].map((size, i) => {
		return {
			// need to explictly type this so the size prop types work in the template
			size: size as 'narrow' | 'medium' | 'wide',
			items: Array((i + 1) * 20).fill(size),
		};
	});

	let gridGap = 4;
	let gridBasis = 18;
</script>
