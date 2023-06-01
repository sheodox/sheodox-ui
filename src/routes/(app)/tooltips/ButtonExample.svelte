<Tooltip {placement}>
	<button class="secondary">{text}</button>

	<span slot="tooltip">
		<Icon icon="heart" />
		Howdy!
	</span>
</Tooltip>

<script lang="ts">
	import { Tooltip, Icon } from '$lib';
	import type { Placement } from '@floating-ui/dom';

	export let placement: Placement;
	export let text: string;
</script>
