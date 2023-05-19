{#each segments as segment}
	{#if segment.type === 'link'}
		<ExternalLink href={segment.text}>{linkText(segment.text, maxDisplayedPathLength)}</ExternalLink>
	{:else}{segment.text}{/if}
{/each}

<script lang="ts">
	import ExternalLink from './ExternalLink.svelte';
	import { parseRichText } from './parseRichText';

	export let text: string;
	// minimum displayed text is '/...' at 4, anything below is unshortened
	export let maxDisplayedPathLength = 20;

	const ellipsis = '...';

	$: segments = parseRichText(text);

	function linkText(linkURI: string, maxDisplayedPathLength: number) {
		// need to ensure at least one character would be displayed to show the / starting the path
		if (maxDisplayedPathLength < ellipsis.length + 1) {
			return linkURI;
		}

		const url = new URL(linkURI),
			ending = url.pathname + url.search + url.hash,
			endingAsCharacters = [...ending],
			shortened =
				endingAsCharacters.length > maxDisplayedPathLength
					? [...ending].slice(0, maxDisplayedPathLength - ellipsis.length).join('') + ellipsis
					: ending;

		return `${url.origin}${shortened}`;
	}
</script>
