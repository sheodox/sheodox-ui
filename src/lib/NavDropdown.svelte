<style>
	.down-icon {
		padding-left: 0.5rem;
	}
	.nav-dropdown-menu {
		z-index: 1000;
	}
</style>

<button
	class="a"
	on:click|stopPropagation={() => (showMenu = !showMenu)}
	aria-pressed={showMenu}
	bind:this={button}
	use:ripple
>
	<slot name="button" />
	{#if showOpenIcon}
		<span class="down-icon">
			<Icon icon="angle-down" />
		</span>
	{/if}
</button>

{#if showMenu}
	<Portal>
		<div
			class="nav-dropdown-menu sx-floating-ui"
			bind:this={menu}
			on:click={() => (showMenu = false)}
			use:positionMenu
			on:keydown={keydown}
		>
			<DropdownMenu>
				<slot name="menu" />
			</DropdownMenu>
		</div>
	</Portal>
{/if}

<svelte:body on:click={maybeClose} />

<script lang="ts">
	import DropdownMenu from './DropdownMenu.svelte';
	import Icon from './Icon.svelte';
	import Portal from './Portal.svelte';
	import { ripple } from './util';
	import { computePosition, autoUpdate } from '@floating-ui/dom';

	let showMenu = false,
		menu: HTMLElement,
		button: HTMLButtonElement;
	export let showOpenIcon = true;

	function maybeClose(e: MouseEvent) {
		if (showMenu && menu && !menu.contains(e.target as HTMLElement)) {
			showMenu = false;
		}
	}

	function positionMenu(menu: HTMLElement) {
		// When the floating element is open on the screen
		const cleanup = autoUpdate(button, menu, () => {
			computePosition(button, menu, { placement: 'bottom-end' }).then(({ x, y }) => {
				Object.assign(menu.style, {
					left: `${x}px`,
					top: `${y}px`,
				});
			});
		});

		return {
			destroy: cleanup,
		};
	}

	function keydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			showMenu = false;
		}
	}
</script>
