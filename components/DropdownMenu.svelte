<style>
	.dropdown-menu :global(ul) {
		list-style: none;
	}
	.dropdown-menu :global(button) {
		color: var(--shdx-text-color);
		text-align: left;
	}
</style>

<div class="dropdown-menu f-column">
	<slot />
</div>