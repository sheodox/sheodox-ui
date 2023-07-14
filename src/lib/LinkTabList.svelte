<ul role="tablist" class="tab-list">
	{#each tabs as tab}
		<li>
			<a
				class="button"
				class:selected={selectedTab === tab.href}
				aria-selected={selectedTab === tab.href}
				href={tab.href}
			>
				{tab.title}
			</a>
		</li>
	{/each}
</ul>

<script lang="ts">
	export let tabs: { href: string; title: string }[];
	export let selectedTab: string;
</script>
