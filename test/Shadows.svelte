<style>
    .light {
        background-color: white;
    }
    .shadow-box {
        height: 5rem;
        width: 5rem;
    }
</style>

<div class="light f-row">
    {#each shadowLevels as level}
        <div class="shadow-box m-6" style="box-shadow: var(--shdx-shadow-{level})"/>
    {/each}
</div>

<div class="dark f-row">
    {#each shadowLevels as level}
        <div class="shadow-box m-6" style="box-shadow: var(--shdx-light-shadow-{level})"/>
    {/each}
</div>

<script>
    const shadowLevels = [];

    for (let i = 1; i <= 5; i++) {
        shadowLevels.push(i);
    }
</script>