<ul role="tablist" class="tab-list">
    {#each tabs as tab}
        <li>
            <button
                role="tab"
                id="tab-{tab.id}"
                class:selected={selectedTab === tab.id}
                aria-selected={selectedTab === tab.id}
                aria-controls="tab-content-{tab.id}"
                on:click={() => selectedTab = tab.id}
            >
                {tab.title}
            </button>
        </li>
    {/each}
</ul>

<script>
    export let tabs;
    export let selectedTab = tabs[0].id;
</script>