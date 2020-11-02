<style>
    header {
        width: 100%;
        justify-content: space-around;
    }
    header.slim {
        background: var(--panel-header-bg);
        justify-content: space-between;
        border-bottom: var(--panel-border);
    }

	header.centered-branding {
		justify-content: space-around;
	}

    header .branding :global(img), header .branding :global(svg) {
        height: 4rem;
        width: 4rem;
        margin: 0 1rem;
    }
    header.slim .branding :global(img), header.slim .branding :global(svg) {
        height: 3rem;
        width: 3rem;
    }
    header.slim h1 {
        margin: 0.3rem 0;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .toolbar {
        margin: 0 1rem;
    }
    @media (max-width: 960px) {
        header {
            flex-direction: column !important;
        }
    }
    header :global(nav a) {
        font-size: 1rem;
    }
</style>

<header class="row" class:slim={slim} class:centered-branding={!$$slots.nav}>
	<div class="branding row">
		<slot name="logo" />
		<h1>{pageName ? `${pageName} -` : ''} {appName}</h1>
	</div>
	{#if $$slots.nav}
		<div class="toolbar">
			<slot name="nav"/>
		</div>
	{/if}
</header>

<script>
	export let pageName;
	export let appName;

	//slim=true is a minimal header for use in app pages where screen real estate is more important
	//slim=false is bigger with no background, used prominently on landing pages
	export let slim = true;
</script>
