<style>
	.progress-border {
		background: var(--sx-accent-gradient);
		padding: 1px;
		border-radius: 0.2rem;
		flex: 1;
	}
	progress {
		width: 100%;
		border-radius: 0.2rem;
	}
	progress::-moz-progress-bar {
		background-size: var(--progress-bg-size) 100%;
	}
	progress::-webkit-progress-value {
		background-size: var(--progress-bg-size) 100%;
	}
</style>

<div class="progress-border f-column">
	<progress {id} {value} {min} {max} style="--progress-bg-size: {bgSize}%" />
</div>

<script lang="ts">
	import { expectProperties } from './component-utils';
	import { genId } from './util';

	export let value = 0;
	export let max = 1;
	export let min = 0;
	export let id = genId();
	$: bgSize = (max / value) * 100;

	expectProperties('Progress', new Map([['id', id]]));
</script>
