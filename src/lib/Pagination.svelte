<style>
	button,
	a {
		margin: 0;
		font-weight: 600;
	}

	a[href=''] {
		color: var(--sx-disabled-button-color);
		pointer-events: none;
	}
</style>

<nav class="f-row justify-content-between gap-3">
	{#if as === 'button'}
		<button on:click={prev} disabled={atStart}>
			<Icon icon="chevron-left" />
			<span class:sr-only={variant === 'minimal'}>Previous</span>
		</button>
	{:else}
		<a class="button" href={atStart ? '' : makeHref(page - 1)}
			><Icon icon="chevron-left" />
			<span class:sr-only={variant === 'minimal'}>Previous</span>
		</a>
	{/if}

	{#if variant === 'full'}
		<div class="f-row gap-2">
			{#each pages as p}
				{#if p === -1}
					{#if as === 'button'}
						<button on:click={promptPage}><span>...</span></button>
					{:else}
						<a href={makeHref(p)} class="button"><span>...</span></a>
					{/if}
				{:else if as === 'button'}
					<button aria-pressed={p === page} on:click={() => (page = p)}><span>{p}</span></button>
				{:else}
					<a aria-pressed={p === page} href={makeHref(p)} class="button"><span>{p}</span></a>
				{/if}
			{/each}
		</div>
	{/if}

	{#if as === 'button'}
		<button on:click={next} disabled={atEnd}>
			<span class:sr-only={variant === 'minimal'}>Next</span>
			<Icon icon="chevron-right" />
		</button>
	{:else}
		<a class="button" href={atEnd ? '' : makeHref(page + 1)}>
			<span class:sr-only={variant === 'minimal'}>Next</span>
			<Icon icon="chevron-right" />
		</a>
	{/if}
</nav>

{#if showSetPage}
	<Modal bind:visible={showSetPage} title="Set Page">
		<div class="modal-body">
			<label>
				Page
				<br />
				<input type="number" min={1} {max} bind:value={pageFormValue} use:focus />
			</label>
		</div>
		<div class="modal-footer gap-2">
			<button class="secondary" on:click={() => (showSetPage = false)}>Cancel</button>
			<button class="primary" on:click={gotoFormPage}>Go</button>
		</div>
	</Modal>
{/if}

<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';
	import { focus } from './util';
	import Icon from './Icon.svelte';
	import Modal from './Modal.svelte';
	export let page: number;
	export let max: number;
	export let as: 'button' | 'a' = 'button';
	export let variant: 'minimal' | 'full' = 'full';
	export let makeHref: (page: number) => string = () => '';

	const dispatch = createEventDispatcher<{
		'set-page': number;
	}>();

	let showSetPage = false,
		pageFormValue = 1;

	// how many pages on either side of the current page should show
	const radius = 2;

	$: atStart = page === 1;
	$: atEnd = page === max;
	$: pages = calculatePage(page, max);

	function prev() {
		page -= 1;
	}
	function next() {
		page += 1;
	}

	function promptPage() {
		pageFormValue = page;
		showSetPage = true;
	}

	function gotoFormPage() {
		showSetPage = false;
		page = pageFormValue;
		dispatch('set-page', pageFormValue);
	}

	function calculatePage(page: number, max: number) {
		const p = [],
			startSpace = Math.min(radius, page - 1),
			endSpace = Math.min(radius, max - page),
			startRadius = radius + (radius - endSpace),
			endRadius = radius + (radius - startSpace),
			idealStart = Math.max(page - startRadius, 1),
			idealEnd = Math.min(max, page + endRadius);

		for (let i = idealStart; i <= idealEnd; i++) {
			p.push(i);
		}

		if (!p.includes(1)) {
			p.unshift(1, -1);
		}
		if (!p.includes(max)) {
			p.push(-1, max);
		}

		const finalPages = [];
		for (let i = 0; i < p.length; i++) {
			if (p[i] !== -1) {
				finalPages.push(p[i]);
			} else {
				const gap = p[i + 1] - p[i - 1];
				if (gap < 2) {
					// if there's no gap at all, an ellipsis makes no sense.
					// note: gap===1 means the numbers went 1, -1, 2. gap === 1 means there's
					// no whole number *between* the two pages, so the ellipsis covers nothing
					continue;
				}
				if (gap === 2) {
					// if the gap that -1 is filling is equivalent to just one number, expand it
					// because the ... takes up the same space as that number would, so it's not helpful
					finalPages.push(p[i - 1] + 1);
				} else {
					// otherwise there's an actual reason to use ...
					finalPages.push(-1);
				}
			}
		}

		return finalPages;
	}
</script>
