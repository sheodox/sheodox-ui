<style>
	.down-icon {
		padding-left: 0.5rem;
	}
	.nav-dropdown-menu {
		z-index: 1000;
	}
</style>

<button class="a" on:click|stopPropagation={() => showMenu = !showMenu} aria-pressed={showMenu} bind:this={button}>
	<slot name="button" />
	{#if showOpenIcon}
		<span class="down-icon">
			<Icon icon="angle-down" />
		</span>
	{/if}
</button>

{#if showMenu}
	<Portal>
		<div class="nav-dropdown-menu" bind:this={menu} on:click={() => showMenu = false} use:positionMenu>
			<DropdownMenu>
				<slot name="menu" />
			</DropdownMenu>
		</div>
	</Portal>
{/if}

<svelte:body on:click={maybeClose} />

<script>
	import DropdownMenu from './DropdownMenu.svelte';
	import Icon from './Icon.svelte';
	import {createPopper} from "@popperjs/core";
	import Portal from "./Portal.svelte";

	let showMenu = false,
		menu, button;
	export let showOpenIcon = true;

	function maybeClose(e) {
		if (showMenu && menu && !menu.contains(e.target)) {
			showMenu = false;
		}
	}

	function positionMenu(menu) {
		createPopper(button, menu, {
			placement: 'bottom-start'
		})
	}
</script>
