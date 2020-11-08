<style>
    .small {
        padding: 0.3rem;
    }
</style>

<div class="f-column container align-items-end">
	<button on:click|stopPropagation={() => showMenu = !showMenu} class:pressed={showMenu} class:small={small}>
		<slot name="button" />
		<Icon icon="caret-down" />
	</button>
	<div bind:this={menu} on:click={() => showMenu = false} class:to-left={openDirection === 'left'}>
		{#if showMenu}
			<DropdownMenu shiftLeft={openDirection === 'left'}>
				<slot name="menu" />
			</DropdownMenu>
		{/if}
	</div>
</div>

<svelte:body on:click={maybeClose} />

<script>
	import Icon from './Icon.svelte';
	import DropdownMenu from './DropdownMenu.svelte';
	export let small = false;
	export let openDirection = 'right';

	let showMenu = false,
		menu;

	function maybeClose(e) {
		if (showMenu && menu && !menu.contains(e.target)) {
			showMenu = false;
		}
	}
</script>