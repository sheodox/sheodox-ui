<style>
	i.prepend {
		padding-right: var(--sx-spacing-1);
	}
	i.append {
		padding-left: var(--sx-spacing-1);
	}
	:global(button.small) i {
		font-size: 12px;
	}
</style>

<i class="{iconVariantClass} {variant} fa-{icon} {cl}" />

<script lang="ts">
	export let icon: string;
	// the usage type of the icon, controls the placement of padding
	// 'prepend' = icon before text, like: "[save icon] Save"
	// 'append' = icon after text, like: "Next [next icon]"
	// 'icon-only' = no text with icon, like: "[close icon]"
	export let variant: 'prepend' | 'append' | 'icon-only' = 'prepend';
	// the fontawesome icon set in use
	export let iconVariant: 'solid' | 'brand' | 'regular' = 'solid';
	export let cl = '';

	$: iconVariantClass = {
		solid: 'fa-solid',
		brand: 'fa-brand',
		regular: 'fa-regular',
	}[iconVariant];
</script>
