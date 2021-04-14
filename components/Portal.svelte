<!-- https://github.com/sveltejs/svelte/issues/3088#issuecomment-505785516 -->
<style>
    .portal-initial-mount-point {
        display: none;
    }
</style>

<div class="portal-initial-mount-point">
    <div bind:this={slottedElements} class="portal-content">
        <slot />
    </div>
</div>

<script>
    import {onMount, onDestroy} from 'svelte';
    let slottedElements, portal;

    onMount(() => {
        portal = document.createElement('div');
        portal.className = 'portal-mount';
        document.body.appendChild(portal);
        portal.appendChild(slottedElements);
    })

    onDestroy(() => {
        portal.remove();
    })
</script>