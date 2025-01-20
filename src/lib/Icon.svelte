<style>
	:global(button.small) i {
		font-size: 12px;
	}
</style>

<i class="{iconVariantClass} fa-{icon} {cl}" />

<script lang="ts">
	export let icon: string;
	// the fontawesome icon set in use
	export let variant: 'solid' | 'brands' | 'regular' = 'solid';
	export let cl = '';

	$: iconVariantClass = {
		solid: 'fa-solid',
		brands: 'fa-brands',
		regular: 'fa-regular',
	}[variant];
</script>
