<style>
    .menubutton-menu {
        z-index: 1000;
    }
</style>

<button
    on:click|stopPropagation={() => showDropdown = !showDropdown}
    bind:this={button}
    aria-pressed={showDropdown}
    class="{triggerClasses}"
>
    <slot name="trigger" />
</button>
{#if showDropdown}
    <Portal>
        <div on:click={() => showDropdown = false} use:positionMenu bind:this={menu} class="menubutton-menu">
            <DropdownMenu>
                <slot name="menu" />
            </DropdownMenu>
        </div>
    </Portal>
{/if}

<svelte:body on:click={maybeClose} />

<script>
    import {createPopper} from '@popperjs/core';
    import DropdownMenu from './DropdownMenu.svelte';
    import Portal from "./Portal.svelte";

    //popperjs placement option
    export let placement = 'bottom-start';
    // optional additional classes to apply to the button that opens the dropdown
    export let triggerClasses = '';

    let showDropdown = false,
        button,
        menu;

    function positionMenu(menu) {
        createPopper(button, menu, {
            placement
        })
    }

    function maybeClose(e) {
        if (showDropdown && menu && !menu.contains(e.target)) {
            showDropdown = false;
        }
    }
</script>
