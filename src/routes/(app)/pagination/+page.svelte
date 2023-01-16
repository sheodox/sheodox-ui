<div class="f-row gap-3 mb-3 align-items-center">
	<label>Max page<input type="number" bind:value={max} /></label>
	<Checkbox bind:checked={asLinks}>As links</Checkbox>
</div>
<Pagination bind:page bind:max as={asLinks ? 'a' : 'button'} makeHref={(p) => `?page=${p}`} />

<script>
	import { Pagination } from '$lib';
	import Checkbox from '$lib/Checkbox.svelte';

	let page = 1;
	let max = 20;

	let asLinks = true;
</script>
