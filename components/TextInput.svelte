<style>
    div {
        padding: 0.2rem 0.5rem;
        position: relative;
        flex-direction: row;
    }
    .focused {
        outline: 1px solid var(--shdx-input-focus-color);
    }
    input {
        outline: none !important;
        border: none !important;
        background: transparent !important;
        transition: opacity 0.2s;
        padding: 0.7rem 0 0.4rem;
    }
    label {
        vertical-align: top;
        transition: font-size 0.2s ease-in-out, top 0.2s ease-in-out, transform 0.2s ease-in-out, color 0.2s ease-in-out;
        display: block;
        min-height: 0.7rem;
        cursor: text;
        position: absolute;
        top: 0;
        pointer-events: none;
    }
    .muted-label label {
        font-size: 0.7rem;
        color: var(--shdx-less-muted);
    }
    .emphasized-label label {
        font-size: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--shdx-least-muted);
    }
    .emphasized-label input {
        opacity: 0;
    }
</style>

<div
    class="input-group"
    class:focused={focused}
    class:muted-label={!emphasizedLabel}
    class:emphasized-label={emphasizedLabel}
>
    <input
        id="text-input-{id}"
        type="text"
        bind:value
        {placeholder}
        on:focus={() => focused = true}
        on:blur={() => focused = false}
        on:keyup
        on:keydown
        on:keypress
    />
    <label
        for="text-input-{id}"
    >
        <slot />
    </label>
    <slot name="append" />
</div>

<script>
    export let value;
    export let placeholder;
    export let id;
    let focused;

    if (!id) {
        throw new Error(`'id' not provided for text input.`)
    }
    $: emphasizedLabel = !value && !focused;
</script>