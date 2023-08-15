<style global lang="scss">
	@import './style.scss';
</style>

<slot />

<script lang="ts">
	import { onDestroy, onMount, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { SxTheme } from './util';

	export let overrideTheme: Writable<SxTheme> = writable(null);

	let systemTheme: SxTheme = 'dark';

	$: setTheme(systemTheme, $overrideTheme);
	$: setContext('sx-color-scheme', overrideTheme);

	function setTheme(systemTheme: SxTheme, overrideTheme: SxTheme | null) {
		if (typeof document !== 'undefined') {
			document.documentElement.classList.remove('sx-theme-dark', 'sx-theme-light');

			const theme = overrideTheme ?? systemTheme ?? 'dark';

			document.documentElement.classList.add(`sx-theme-${theme}`);
		}
	}

	function onSystemPrefThemeChange(e: MediaQueryListEvent) {
		systemTheme = e.matches ? 'dark' : 'light';
	}

	let systemPrefDark: MediaQueryList | undefined;

	onMount(() => {
		if (typeof window !== 'undefined') {
			systemPrefDark = window.matchMedia('(prefers-color-scheme: dark)');

			systemTheme = systemPrefDark.matches ? 'dark' : 'light';

			systemPrefDark.addEventListener('change', onSystemPrefThemeChange);
		}
	});

	onDestroy(() => {
		systemPrefDark?.removeEventListener('change', onSystemPrefThemeChange);
	});
</script>
