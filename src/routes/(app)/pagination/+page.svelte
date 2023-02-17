<style>
	.minimal {
		max-width: 10rem;
	}
</style>

<div class="f-row gap-3 mb-3 align-items-center">
	<label>Max page<input type="number" bind:value={max} /></label>
	<Checkbox bind:checked={asLinks}>As links</Checkbox>
</div>
<p>Regular Pagination</p>
<Pagination bind:page bind:max as={asLinks ? 'a' : 'button'} makeHref={(p) => `?page=${p}`} />

<div class="minimal">
	<p>Minimal Pagination</p>
	<Pagination variant="minimal" bind:page bind:max as={asLinks ? 'a' : 'button'} makeHref={(p) => `?page=${p}`} />
</div>

<script>
	import { Pagination } from '$lib';
	import Checkbox from '$lib/Checkbox.svelte';

	let page = 1;
	let max = 20;

	let asLinks = false;
</script>
