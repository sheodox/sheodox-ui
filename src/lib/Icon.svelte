<style>
	i.prepend {
		padding-right: var(--shdx-spacing-1);
	}
	i.append {
		padding-left: var(--shdx-spacing-1);
	}
	:global(button.small) i {
		font-size: 12px;
	}
</style>

<i class="{iconVariantClass} {variant} fa-{icon}" />

<script lang="ts">
	export let icon: string;
	// the usage type of the icon, controls the placement of padding
	// 'prepend' = icon before text, like: "[save icon] Save"
	// 'append' = icon after text, like: "Next [next icon]"
	// 'icon-only' = no text with icon, like: "[close icon]"
	export let variant: 'prepend' | 'append' | 'icon-only' = 'prepend';
	// the fontawesome icon set in use
	export let iconVariant: 'solid' | 'brand' = 'solid';

	const iconVariantClass = {
		solid: 'fas',
		brand: 'fab',
	}[iconVariant];
</script>
