<style>
    input {
        opacity: 0;
    }
    input:focus + label > .checkbox-icon > :global(i) {
        outline: 0.1rem solid var(--accent-blue);
        border-radius: 3px;
    }
    .checkbox-icon {
        margin-left: -1.2rem;
        color: var(--text-color);
    }
    .checkbox-icon :global(i) {
        padding: 1px;
    }
    .checkbox-icon.checked {
        color: var(--accent-blue);
    }
</style>

<div>
    <input type="checkbox" id="checkbox-{id}" bind:checked />
    <label for="checkbox-{id}">
        <span class="checkbox-icon" class:checked={checked}>
            <Icon icon="{checked ? 'check-square' : 'square'}" noPadding={true} />
        </span>
        <slot />
    </label>
</div>

<script>
    import Icon from './Icon.svelte';

    export let id;
    export let checked = false;

    if (!id) {
        throw new Error(`'id' not provided for checkbox.`)
    }
</script>