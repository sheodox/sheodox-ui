<style>
	.menubutton-menu {
		/* above the modal so it can be used on those */
		z-index: 10001;
	}
</style>

<button on:click|stopPropagation={buttonTrigger} bind:this={button} aria-pressed={showDropdown} class={triggerClasses}>
	<slot name="trigger" />
</button>
{#if showDropdown}
	<Portal>
		<div
			on:click={() => (showDropdown = false)}
			on:keydown={keydown}
			use:positionMenu
			bind:this={menu}
			class="menubutton-menu sx-floating-ui"
		>
			<DropdownMenu>
				<slot name="menu" />
			</DropdownMenu>
		</div>
	</Portal>
{/if}

<svelte:body on:click={maybeClose} />

<script lang="ts">
	import { onDestroy } from 'svelte';
	import { computePosition, autoPlacement, type Placement } from '@floating-ui/dom';
	import DropdownMenu from './DropdownMenu.svelte';
	import Portal from './Portal.svelte';

	// optional additional classes to apply to the button that opens the dropdown
	export let triggerClasses = '';
	// optionally allow triggering by binding context menu to a DOM element
	export let contextTriggerElement: HTMLElement | null = null;

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

	// only allow top/bottom placements, side looks strange
	const allowedPlacements: Placement[] = ['top', 'top-end', 'top-start', 'bottom', 'bottom-end', 'bottom-start'];

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

			computePosition({ getBoundingClientRect: positionAtMouse }, menu, {
				middleware: [autoPlacement({ allowedPlacements })],
			});
		};
		showDropdown = !showDropdown;
	}

	function buttonTrigger() {
		placementFunction = (menu) => {
			computePosition(button, menu, { middleware: [autoPlacement({ allowedPlacements })] }).then(({ x, y }) => {
				Object.assign(menu.style, {
					left: `${x}px`,
					top: `${y}px`,
				});
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

	function keydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			showDropdown = false;
		}
	}

	onDestroy(destroyContextHandler);
</script>
