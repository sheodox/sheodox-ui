<style lang="scss">
	fieldset {
		--fieldset-legend-color: var(--sx-arg-fieldset-legend-color, var(--sx-text-color));
		--fieldset-border-radius: var(--sx-arg-fieldset-border-radius, var(--fieldset-default-border-radius));
		--fieldset-padding: var(--sx-arg-fieldset-padding, var(--fieldset-default-padding));
	}
	fieldset.variant-bordered {
		--sx-fieldset-bordered-legend-color: white;
		--sx-fieldset-background-color: var(--sx-gray-transparent);
		--sx-fieldset-bordered-border-color: var(--sx-gray-400);

		&,
		span {
			background-color: var(--sx-fieldset-background-color);
			border: 1px solid var(--sx-fieldset-bordered-border-color);
			border-radius: var(--fieldset-border-radius);
		}

		legend {
			color: var(--sx-fieldset-bordered-legend-color);
			line-height: 1;
			font-weight: 600;

			span {
				padding-left: var(--sx-spacing-1);
				padding-right: var(--sx-spacing-1);
				background: var(--sx-fieldset-bordered-border-color);
				font-size: var(--sx-legend-font-size);
				display: inline-block;
			}
		}
	}
	fieldset.variant-box {
		--sx-fieldset-background-color: var(--sx-gray-transparent);
		--sx-fieldset-box-top: calc(0.5 * var(--sx-legend-font-size) + var(--fieldset-padding));
		border: none;
		background-color: var(--sx-fieldset-background-color);
		overflow: hidden;
		position: relative;
		padding: var(--fieldset-padding);
		padding-top: var(--sx-fieldset-box-top);
		border-radius: var(--fieldset-border-radius);

		legend {
			font-size: var(--sx-font-size-3);
			color: var(--fieldset-legend-color);
			border-radius: 2px;
			position: relative;
			width: 100%;

			span {
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				text-overflow: ellipsis;
				overflow: hidden;
				font-weight: 600;
				position: relative;
				top: var(--sx-fieldset-box-top);
				font-size: var(--sx-legend-font-size);
			}
		}
		.fieldset-contents {
			padding-top: calc(0.5 * var(--fieldset-padding));
		}
	}
	fieldset.variant-tab {
		--sx-fieldset-background-color: var(--sx-gray-500);
		border: none;
		background-color: var(--sx-fieldset-background-color);
		overflow: hidden;
		position: relative;
		border-radius: var(--fieldset-border-radius);

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
				font-weight: 600;
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
					font-weight: 600;
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
					font-weight: 600;
				}

				&::after,
				&::before {
					border-width: 0.75rem;
				}
			}
		}

		&.size-large {
			legend {
				font-size: var(--sx-font-size-5);
				span {
					font-weight: 600;
				}

				&::after,
				&::before {
					border-width: 1rem;
				}
			}
		}
	}

	.size-small {
		--sx-legend-font-size: var(--sx-font-size-1);
		--fieldset-default-border-radius: 5px;
		--fieldset-default-padding: var(--sx-spacing-1);
	}

	.size-normal {
		--sx-legend-font-size: var(--sx-font-size-3);
		--fieldset-default-border-radius: 10px;
		--fieldset-default-padding: var(--sx-spacing-2);
	}
	.size-large {
		--sx-legend-font-size: var(--sx-font-size-5);
		--fieldset-default-border-radius: 10px;
		--fieldset-default-padding: var(--sx-spacing-4);
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
	<div class="fieldset-contents {contentClasses}">
		<slot />
	</div>
</fieldset>

<script lang="ts">
	export let legend: string;
	export let fieldsetClasses = '';
	export let legendClasses = '';
	export let contentClasses = '';
	// if the legend should be centered
	export let centeredLegend = false;
	// if the legend should use an unintrusive text color
	export let mutedLegend = false;
	export let size: 'small' | 'normal' | 'large' = 'normal';
	// the style the fieldset/legend will have
	export let variant: 'box' | 'tab' | 'bordered' = 'box';
	export let disabled = false;
</script>
