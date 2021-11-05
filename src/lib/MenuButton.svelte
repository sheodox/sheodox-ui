<style>
	.menubutton-menu {
		z-index: 1000;
	}
</style>

<button on:click|stopPropagation={buttonTrigger} bind:this={button} aria-pressed={showDropdown} class={triggerClasses}>
	<slot name="trigger" />
</button>
{#if showDropdown}
	<Portal>
		<div on:click={() => (showDropdown = false)} use:positionMenu bind:this={menu} class="menubutton-menu">
			<DropdownMenu>
				<slot name="menu" />
			</DropdownMenu>
		</div>
	</Portal>
{/if}

<svelte:body on:click={maybeClose} />

<script lang="ts">
	import { onDestroy } from 'svelte';
	import { createPopper, Placement } from '@popperjs/core';
	import DropdownMenu from './DropdownMenu.svelte';
	import Portal from './Portal.svelte';

	// popperjs placement option
	export let placement: Placement = 'bottom-start';
	// optional additional classes to apply to the button that opens the dropdown
	export let triggerClasses = '';
	// optionally allow triggering by binding context menu to a DOM element
	export let contextTriggerElement: HTMLElement = null;

	let showDropdown = false,
		button: HTMLButtonElement,
		menu: HTMLElement,
		placementFunction: (menu: HTMLElement) => any;

	function positionMenu(menu: HTMLElement) {
		placementFunction(menu);
	}

	function maybeClose(e: MouseEvent) {
		if (showDropdown && menu && !menu.contains(e.target as HTMLElement)) {
			showDropdown = false;
		}
	}

	function contextTrigger(e: MouseEvent) {
		e.preventDefault();
		placementFunction = (menu) => {
			const y = e.clientY + 10;
			const positionAtMouse = () =>
				({
					top: y,
					bottom: y,
					left: e.clientX,
					right: e.clientX,
					width: 0,
					height: 0,
				} as DOMRect);

			createPopper({ getBoundingClientRect: positionAtMouse }, menu, { placement });
		};
		showDropdown = !showDropdown;
	}

	function buttonTrigger() {
		placementFunction = (menu) => {
			createPopper(button, menu, {
				placement,
			});
		};
		showDropdown = !showDropdown;
	}

	$: {
		destroyContextHandler();
		if (contextTriggerElement) {
			contextTriggerElement.addEventListener('contextmenu', contextTrigger);
		}
	}

	function destroyContextHandler() {
		if (contextTriggerElement) {
			contextTriggerElement.removeEventListener('contextmenu', contextTrigger);
		}
	}

	onDestroy(destroyContextHandler);
</script>
