<Tooltip>
	<button class="secondary">{text}</button>

	<span slot="tooltip">
		<Icon icon="heart" />
		Howdy!
	</span>
</Tooltip>

<script lang="ts">
	import { Tooltip, Icon } from '$lib';

	export let text: string;
</script>
