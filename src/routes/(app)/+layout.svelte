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
						<Icon icon="cog" />
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
							<li>
								<button on:click={() => ($theme = null)}>Theme: System Default</button>
							</li>
							<li>
								<button on:click={() => ($theme = 'light')}>Theme: Light</button>
							</li>
							<li>
								<button on:click={() => ($theme = 'dark')}>Theme: Dark</button>
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

<Stack dir="r">
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
		<Layout size="medium" cl="f-column">
			<slot />
		</Layout>
	</div>
</Stack>

<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import {
		Modals,
		Stack,
		Layout,
		Header,
		Toasts,
		Sidebar,
		NavDropdown,
		Icon,
		SheodoxUIStyles,
		getSxColorSchemeContext,
	} from '$lib';

	let menuOpen = false,
		showSidebar = true,
		sidebarDocked = true,
		currentPathname = '';

	afterNavigate(({ to }) => {
		currentPathname = to?.url.pathname || '';
	});

	const theme = getSxColorSchemeContext();

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
		{ href: '/stacks', text: 'Stacks' },
		{ href: '/tooltips', text: 'Tooltips' },
		{ href: '/tabs', text: 'Tabs' },
		{ href: '/link-tabs', text: 'Link Tabs' },
		{ href: '/lists', text: 'Lists' },
		{ href: '/toggles', text: 'Toggles' },
		{ href: '/toasts', text: 'Toasts' },
		{ href: '/debug', text: 'Debug' },
		{ href: '/scrolling', text: 'Scrolling' },
		{ href: '/pagination', text: 'Pagination' },
		{ href: '/landing-page', text: 'Landing Page' },
	];
</script>
