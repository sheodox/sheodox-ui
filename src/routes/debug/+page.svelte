<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				<td>{row.name}</td>
				<td>{row.value}</td>
			</tr>
		{/each}
	</tbody>
</table>

<script lang="ts">
	import { browser } from '$app/environment';

	const rows = !browser ? [] : [{ name: 'window.innerWidth', value: window.innerWidth }];
</script>
