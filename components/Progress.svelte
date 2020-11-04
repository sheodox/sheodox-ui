<style>
    label {
        white-space: nowrap;
        margin-right: 0.2rem;
    }
    .progress-border {
        background: var(--accent-gradient);
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
	<progress
		{id}
		{value}
		{max}
		style="--progress-bg-size: {bgSize}%"
	></progress>
</div>


<script>
	import {expectProperties} from "./component-utils";

	export let value = 0;
	export let max = 1;
	export let id;
	$: bgSize = (max / value) * 100;

	expectProperties('Progress', new Map([
		['id', id],
	]));
</script>