<style>
    header {
        width: 100%;
        justify-content: space-around;
		box-shadow: var(--shdx-shadow-1);
    }
    header.slim {
        background: var(--shdx-gray-600);
        justify-content: space-between;
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
		height: 100%;
    }
    @media (max-width: 960px) {
        header {
            flex-direction: column !important;
        }
    }
	h1 a {
		color: var(--shdx-text-color);
		text-decoration: none;
	}
</style>

<header class="row" class:slim={slim} class:centered-branding={!$$slots.nav}>
	<div class="branding row">
		<slot name="logo" />
		<h1>
			{#if href}
				<a href={href} on:click={headerClick}>{title}</a>
			{:else}
				{title}
			{/if}
		</h1>
	</div>
	{#if $$slots.nav}
		<div class="toolbar">
			<slot name="nav"/>
		</div>
	{/if}
</header>

<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let pageName;
	export let appName;
	export let href;
	export let titleClickPreventDefault = false;

	$: title = `${pageName ? `${pageName} -` : ''} ${appName}`.trim();

	//slim=true is a minimal header for use in app pages where screen real estate is more important
	//slim=false is bigger with no background, used prominently on landing pages
	export let slim = true;

	function headerClick(e) {
		if (titleClickPreventDefault) {
			e.preventDefault();
		}
		dispatch('titleclick')
	}
</script>
