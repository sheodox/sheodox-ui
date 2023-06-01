<style lang="scss">
	.layout {
		margin: 0 auto;
		max-width: 90vw;

		&.size- {
			&narrow {
				width: 40rem;
			}
			&medium {
				width: 80rem;
			}
			&wide {
				width: 120rem;
			}
		}
	}
</style>

<div class={layout}>
	<slot />
</div>

<script lang="ts">
	export let size: 'narrow' | 'medium' | 'wide' = 'medium';
	// any arbitrary classes
	export let cl = '';

	$: layout = `layout size-${size} ${cl}`;
</script>
