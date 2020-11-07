<style>
    i {
        padding-right: 0.25rem;
    }
    i.no-padding {
        padding: 0;
    }
    :global(button.small) i {
        font-size: 12px;
    }
</style>
<i class="{variantClass} fa-{icon}" class:no-padding={noPadding}></i>
<script>
	export let icon;
	export let noPadding = false;
	export let variant = 'solid';
	const variantClass = {
		solid: 'fas',
		brand: 'fab'
	}[variant];
</script>