{#each $modals as modal}
	<BuiltInModal {modal} />
{/each}

<script lang="ts">
	import { modals } from './modals';
	import BuiltInModal from './BuiltInModal.svelte';
</script>
