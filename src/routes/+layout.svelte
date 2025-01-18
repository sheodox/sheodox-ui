<!-- svelte-ignore css-unused-selector -->
<style global lang="scss">
	@import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
	@font-face {
		font-family: 'Inter';
		src: url('/fonts/Inter.ttf');
		font-display: swap;
	}

	body {
		--sx-arg-app-font: 'Inter', sans-serif;
	}
</style>

<SheodoxUIStyles>
	<slot />
</SheodoxUIStyles>

<script lang="ts">
	import { SheodoxUIStyles } from '$lib';
</script>
