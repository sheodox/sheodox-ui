<style>
	.menubutton-menu {
		z-index: 1000;
	}
</style>

<button
	on:click|stopPropagation={buttonTrigger}
	bind:this={button}
	aria-pressed={showDropdown}
	class={triggerClasses}
>
	<slot name="trigger" />
</button>
{#if showDropdown}
	<Portal>
		<div
			on:click={() => (showDropdown = false)}
			use:positionMenu
			bind:this={menu}
			class="menubutton-menu"
		>
			<DropdownMenu>
				<slot name="menu" />
			</DropdownMenu>
		</div>
	</Portal>
{/if}

<svelte:body on:click={maybeClose} />

<script>
	import { onDestroy } from "svelte";
	import { createPopper } from "@popperjs/core";
	import DropdownMenu from "./DropdownMenu.svelte";
	import Portal from "./Portal.svelte";

	// popperjs placement option
	export let placement = "bottom-start";
	// optional additional classes to apply to the button that opens the dropdown
	export let triggerClasses = "";
	// optionally allow triggering by binding context menu to a DOM element
	export let contextTriggerElement;

	let showDropdown = false,
		button,
		menu,
		placementFunction;

	function positionMenu(menu) {
		placementFunction(menu);
	}

	function maybeClose(e) {
		if (showDropdown && menu && !menu.contains(e.target)) {
			showDropdown = false;
		}
	}

	function contextTrigger(e) {
		e.preventDefault();
		placementFunction = (menu) => {
			const y = e.clientY + 10;
			const positionAtMouse = () => ({
				top: y,
				bottom: y,
				left: e.clientX,
				right: e.clientX,
				width: 0,
				height: 0,
			});

			createPopper({ getBoundingClientRect: positionAtMouse }, menu, placement);
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
			contextTriggerElement.addEventListener(
				"contextmenu",
				contextTrigger
			);
		}
	}

	function destroyContextHandler() {
		if (contextTriggerElement) {
			contextTriggerElement.removeEventListener(
				"contextmenu",
				contextTrigger
			);
		}
	}

	onDestroy(destroyContextHandler);
</script>
