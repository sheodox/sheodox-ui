<style lang="scss">
	fieldset {
		--sx-fieldset-background-color: var(--sx-gray-500);
		border: none;
		background-color: var(--sx-gray-500);
		overflow: hidden;
		border-radius: 5px;

		legend {
			font-size: var(--sx-font-size-3);
			color: var(--sx-text-color);
			border-radius: 2px;
			position: relative;
			margin-left: var(--sx-spacing-3);
			span {
				background: var(--sx-fieldset-background-color);
				font-weight: bold;
			}

			&::after,
			&::before {
				content: ' ';
				width: 0;
				height: 0;
				position: absolute;
				background-color: transparent;
				border: 0.65rem solid transparent;
			}
			&::after {
				border-left-color: var(--sx-fieldset-background-color);
			}
			&::before {
				transform: translateX(-100%);
				border-right-color: var(--sx-fieldset-background-color);
			}
		}
	}

	.variant-small {
		legend {
			font-size: var(--sx-font-size-1);
			span {
				font-weight: bold;
			}

			&::after,
			&::before {
				border-width: 0.45rem solid transparent;
			}
		}
	}

	.variant-normal {
		legend {
			font-size: var(--sx-font-size-3);
			span {
				font-weight: bold;
			}

			&::after,
			&::before {
				border-width: 0.65rem;
			}
		}
	}
	.centeredLegend legend {
		margin: 0 auto;
	}
	.mutedLegend legend {
		color: var(--sx-gray-75);
	}
</style>

<fieldset class="variant-{variant} {fieldsetClasses}" class:centeredLegend class:mutedLegend>
	<legend class={legendClasses}><span>{title}</span></legend>
	<slot />
</fieldset>

<script lang="ts">
	export let title: string;
	export let fieldsetClasses = '';
	export let legendClasses = '';
	// if the legend should be centered
	export let centeredLegend = false;
	// if the legend should use an unintrusive text color
	export let mutedLegend = false;
	export let variant: 'normal' | 'small' = 'normal';
</script>
