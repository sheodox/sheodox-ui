<style>
	.shift-left {
		transform: translateX(-100%);
	}
</style>

<div class="dropdown-menu f-column" class:shift-left={shiftLeft}>
	<slot />
</div>

<script>
	export let shiftLeft = false;
</script>