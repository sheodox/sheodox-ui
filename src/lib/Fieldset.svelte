<style lang="scss">
	fieldset.variant-bordered {
		--sx-fieldset-bordered-legend-color: white;
		--sx-fieldset-background-color: var(--sx-gray-transparent);
		--sx-fieldset-bordered-border-color: var(--sx-gray-400);

		&,
		span {
			background-color: var(--sx-fieldset-background-color);
			border: 1px solid var(--sx-fieldset-bordered-border-color);
			border-radius: 3px;
		}

		legend {
			color: var(--sx-fieldset-bordered-legend-color);
			line-height: 1;
			font-weight: bold;

			span {
				padding-left: var(--sx-spacing-1);
				padding-right: var(--sx-spacing-1);
				background: var(--sx-fieldset-bordered-border-color);
				display: inline-block;
			}
		}
	}
	fieldset.variant-box {
		--sx-fieldset-background-color: var(--sx-gray-transparent);
		border: none;
		background-color: var(--sx-fieldset-background-color);
		overflow: hidden;
		position: relative;
		padding-top: var(--sx-legend-font-size);
		clip-path: polygon(5% 0%, 95% 0%, 100% 5%, 100% 100%, 0% 100%, 0% 5%);
		border-radius: 3px;

		legend {
			font-size: var(--sx-font-size-3);
			color: var(--sx-text-color);
			border-radius: 2px;
			position: relative;
			width: 100%;

			span {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: inline-block;
				font-weight: bold;
				position: relative;
				top: calc(var(--sx-legend-font-size) + var(--sx-spacing-1));
				font-size: var(--sx-legend-font-size);
			}
		}
	}
	fieldset.variant-tab {
		--sx-fieldset-background-color: var(--sx-gray-500);
		border: none;
		background-color: var(--sx-fieldset-background-color);
		overflow: hidden;
		position: relative;
		border-radius: 5px;

		legend {
			font-size: var(--sx-font-size-3);
			color: var(--sx-text-color);
			border-radius: 2px;
			position: relative;
			margin-left: var(--sx-spacing-3);
			width: 100%;

			span {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				max-width: calc(100% - var(--sx-spacing-3) * 2);
				display: inline-block;
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
				border-color: transparent;
				border-style: solid;
			}
			&::after {
				border-left-color: var(--sx-fieldset-background-color);
			}
			&::before {
				transform: translateX(-100%);
				border-right-color: var(--sx-fieldset-background-color);
			}
		}

		&.size-small {
			legend {
				font-size: var(--sx-font-size-1);
				span {
					font-weight: bold;
				}

				&::after,
				&::before {
					border-width: 0.6rem;
				}
			}
		}

		&.size-normal {
			legend {
				font-size: var(--sx-font-size-3);
				span {
					font-weight: bold;
				}

				&::after,
				&::before {
					border-width: 0.75rem;
				}
			}
		}
	}

	.size-small {
		--sx-legend-font-size: var(--sx-font-size-1);
	}

	.size-normal {
		--sx-legend-font-size: var(--sx-font-size-3);
	}
	.centeredLegend legend {
		text-align: center;
		margin: 0 !important;
		span {
			display: inline;
		}
	}
	.mutedLegend legend {
		--sx-text-color: var(--sx-gray-75);
	}
</style>

<fieldset class="size-{size} variant-{variant} {fieldsetClasses}" class:centeredLegend class:mutedLegend {disabled}>
	<legend class={legendClasses} title={legend}><span>{legend}</span></legend>
	<slot />
</fieldset>

<script lang="ts">
	export let legend: string;
	export let fieldsetClasses = '';
	export let legendClasses = '';
	// if the legend should be centered
	export let centeredLegend = false;
	// if the legend should use an unintrusive text color
	export let mutedLegend = false;
	export let size: 'normal' | 'small' = 'normal';
	// the style the fieldset/legend will have
	export let variant: 'box' | 'tab' | 'bordered' = 'box';
	export let disabled = false;
</script>
