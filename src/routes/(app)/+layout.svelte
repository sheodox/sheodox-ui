<style lang="scss">
	.main-content {
		max-width: 95vw;
		width: 80rem;
		margin: 0 auto;
	}
</style>

<svelte:head>
	<title>sheodox-ui</title>
</svelte:head>

<SheodoxUIStyles />

<Header appName="sheodox-ui" showMenuTrigger={showSidebar} bind:menuOpen>
	<nav slot="headerCenter">
		<ul>
			<li>
				<a href="/" class="active">Link 1</a>
			</li>
			<li>
				<a href="/">Link 2</a>
			</li>
			<li>
				<a href="/">Link 2</a>
			</li>
			<li>
				<a href="/">Link 2</a>
			</li>
		</ul>
	</nav>
	<nav slot="headerEnd">
		<ul>
			<li>
				<NavDropdown showOpenIcon={false}>
					<span slot="button">
						<Icon icon="cog" variant="icon-only" />
						<span class="sr-only">Menu</span>
					</span>
					<div slot="menu">
						<ul>
							<li>
								<button on:click={() => (showSidebar = !showSidebar)}>Toggle Sidebar</button>
							</li>
							<li>
								<button on:click={() => (sidebarDocked = !sidebarDocked)}
									>{sidebarDocked ? 'Disable' : 'Enable'} Sidebar Docking</button
								>
							</li>
							<li>
								<button disabled>Disabled button</button>
							</li>
						</ul>
					</div>
				</NavDropdown>
			</li>
		</ul>
	</nav>
</Header>

<Toasts />

<Modals />

<main class="f-row">
	{#if showSidebar}
		<Sidebar bind:menuOpen docked={sidebarDocked}>
			<h1 slot="header">sheodox-ui</h1>
			<nav class="sx-sidebar-simple-links">
				{#each links as link}
					<a href={link.href} class:active={currentPathname === link.href}>{link.text}</a>
				{/each}
			</nav>
		</Sidebar>
	{/if}
	<div class="f-1 m-4">
		<section class="main-content f-column">
			<slot />
		</section>
	</div>
</main>

<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { Modals, Header, Toasts, Sidebar, NavDropdown, Icon, SheodoxUIStyles } from '$lib';

	let menuOpen = false,
		showSidebar = true,
		sidebarDocked = true,
		currentPathname = '';

	afterNavigate(({ to }) => {
		currentPathname = to?.url.pathname || '';
	});

	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/accordions', text: 'Accordions' },
		{ href: '/alerts', text: 'Alerts' },
		{ href: '/badges', text: 'Badges' },
		{ href: '/colors', text: 'Colors' },
		{ href: '/cards', text: 'Cards' },
		{ href: '/fieldsets', text: 'Fieldsets' },
		{ href: '/modals', text: 'Modals' },
		{ href: '/progress', text: 'Progress' },
		{ href: '/rich-text', text: 'Rich Text' },
		{ href: '/shadows', text: 'Shadows' },
		{ href: '/tabs', text: 'Tabs' },
		{ href: '/toggles', text: 'Toggles' },
		{ href: '/toasts', text: 'Toasts' },
		{ href: '/debug', text: 'Debug' },
		{ href: '/scrolling', text: 'Scrolling' },
		{ href: '/pagination', text: 'Pagination' },
		{ href: '/landing-page', text: 'Landing Page' },
	];
</script>
