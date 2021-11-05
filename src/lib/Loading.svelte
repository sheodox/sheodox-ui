<style>
	@keyframes loading {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.container:not(.small) {
		padding: 1rem;
		width: 100%;
	}
	.indicator {
		margin: 0 auto;
		height: 3rem;
		width: 3rem;
		border-radius: 100%;
		border: 1px solid #00b7ff;
		border-right-color: transparent;
		animation: loading 0.6s infinite linear;
	}
	.container.small {
		padding: 0.2rem;
	}
	.small .indicator {
		height: 1rem;
		width: 1rem;
	}
</style>

<div class="container" class:small={size === 'small'}>
	<div class="indicator" />
</div>

<script lang="ts">
	export let size: 'small' | 'large' = 'large';
</script>
