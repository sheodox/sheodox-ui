<style>
	.sx-progress {
		width: 100%;
		border-radius: 0.2rem;
		background: var(--sx-gray-transparent-light);
		border: none;
		border-radius: 3px;
		height: var(--sx-spacing-2);
		overflow: hidden;
	}
	.sx-progress-bar {
		background: var(--sx-pink-500);
		height: 100%;
	}
</style>

<div class="sx-progress">
	<div
		class="sx-progress-bar"
		role="progressbar"
		{id}
		aria-valuenow={value}
		aria-valuemin={min}
		aria-valuemax={max}
		style="width: {bgSize}%"
	/>
</div>

<script lang="ts">
	import { expectProperties } from './component-utils';
	import { genId } from './util';

	export let value = 0;
	export let max = 1;
	export let min = 0;
	export let id = genId();
	$: bgSize = (value / max) * 100;

	expectProperties('Progress', new Map([['id', id]]));
</script>
