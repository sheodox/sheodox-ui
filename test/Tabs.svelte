<script>
    import {TabList, Tab} from "../index";
    let selectedTab;
    const tabs = [
        {id: '1', title: 'One'},
        {id: '2', title: 'Two'},
    ]
</script>
<TabList {tabs} bind:selectedTab />

<Tab {selectedTab} tabId="1">
    <p>This is the first tab</p>
</Tab>

<Tab {selectedTab} tabId="2">
    <p>This is the second tab</p>
</Tab>
