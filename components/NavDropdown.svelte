<button class="a" on:click|stopPropagation={() => showMenu = !showMenu} class:pressed={showMenu}>
	<slot name="button" />
	<Icon icon="keyboard_arrow_down" />
</button>

{#if showMenu}
	<div bind:this={menu} on:click={() => showMenu = false}>
		<DropdownMenu>
			<slot name="menu" />
		</DropdownMenu>
	</div>
{/if}

<svelte:body on:click={maybeClose} />

<script>
	import DropdownMenu from './DropdownMenu.svelte';
	import Icon from './Icon.svelte';

	let showMenu = false,
		menu;

	function maybeClose(e) {
		if (showMenu && menu && !menu.contains(e.target)) {
			showMenu = false;
		}
	}
</script>
