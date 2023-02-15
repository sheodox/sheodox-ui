<style>
	.swatch {
		height: 5rem;
		min-width: 5rem;
		width: 100%;
	}
	td {
		margin: 0;
		padding: 0;
		text-align: center;
	}
</style>

<div class="m-3">
	<table>
		<thead>
			<tr>
				<th scope="row">weight</th>
				{#each weights as weight}
					<th>{weight}</th>{/each}
			</tr>
		</thead>
		<tbody>
			{#each colors as color}
				<tr>
					<th scope="row">{color}</th>
					{#each weights as weight}
						<td><div class="swatch" style="background-color: var(--sx-{color}-{weight})" /></td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<script lang="ts">
	import { colors } from '../_util';
	const weights: (number | string)[] = [];

	for (let i = 900; i >= 100; i -= 100) {
		weights.push(i);
	}
	weights.push(75, 50, 25, 'transparent', 'transparent-faint');
</script>
