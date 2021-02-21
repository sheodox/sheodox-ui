<style>
    .tab {
        display: none;
    }
    .tab.selected {
        display: block;
    }
</style>
<div class="tab" id="tab-content-{tabId}" class:selected={tabId === selectedTab} aria-labelledby="tab-{tabId}">
    <slot />
</div>

<script>
    export let tabId;
    export let selectedTab;
</script>
