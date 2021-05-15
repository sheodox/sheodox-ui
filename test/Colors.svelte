<style>
    .swatch {
        height: 5rem;
        width: 5rem;
    }
</style>

{#each colors as color}
    <div class="f-row">
        {#each weights as weight}
            <div class="swatch" style="background-color: var(--shdx-{color}-{weight})"></div>
        {/each}
    </div>
{/each}

<script>
    import {colors} from './util';
    const weights = [];

    for (let i = 900; i >= 100; i -= 100) {
        weights.push(i);
    }
</script>