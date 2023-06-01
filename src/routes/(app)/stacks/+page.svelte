<style>
	.squares {
		background: var(--sx-gray-800);
		flex-basis: 50rem;
	}
	.square {
		background: var(--sx-gray-400);
		border-radius: 5px;
	}
</style>

<div class="squares f-1 f-column">
	<Stack {gap} {justify} {align} {dir} cl="f-1">
		{#each sizes as size}
			<div class="square" style:width="{size}rem" style:height="{size}rem" />
		{/each}
	</Stack>
</div>

<Layout size="narrow">
	<h2>Settings</h2>
	<Stack dir="c" gap={2}>
		<Stack dir="r">
			<TextInput bind:value={gap} min={0} max={15} type="number">Gap</TextInput>
			<label>
				Flex Direction
				<br />
				<select bind:value={dir}>
					{#each dirOptions as d}
						<option value={d}>{d}</option>
					{/each}
				</select>
			</label>
			<label>
				Justify Content
				<br />
				<select bind:value={justify}>
					{#each justifyOptions as j}
						<option value={j}>{j}</option>
					{/each}
				</select>
			</label>
			<label>
				Align Items
				<br />
				<select bind:value={align}>
					{#each alignOptions as a}
						<option value={a}>{a}</option>
					{/each}
				</select>
			</label>
		</Stack>

		<code>
			{`<Stack${stackAttrs.length ? ' ' + stackAttrs.join(' ') : ''}>...</Stack>`}
		</code>
	</Stack>
</Layout>

<script lang="ts">
	import { Stack, Layout, TextInput } from '$lib';

	const sizes = [7, 5, 6, 9, 6];

	const justifyOptions = [null, 'center', 'start', 'end', 'between', 'around'] as const;
	const alignOptions = [null, 'center', 'start', 'end', 'baseline'] as const;
	const dirOptions = [null, 'row', 'column'] as const;

	let justify: (typeof justifyOptions)[number] = null;
	let align: (typeof alignOptions)[number] = null;
	let dir: (typeof dirOptions)[number] = null;
	let gap = 2;

	$: stackAttrs = Object.entries({ gap, justify, align, dir }).reduce((attrs, [key, value]) => {
		if (value) {
			return [...attrs, `${key}="${value}"`];
		}
		return attrs;
	}, [] as string[]);
</script>
