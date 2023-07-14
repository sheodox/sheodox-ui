<style>
	.sx-toggles {
		align-self: start;
	}
</style>

<Fieldset legend="Select your favorite colors" fieldsetClasses="f-column">
	<div class="sx-toggles">
		{#each colors as color}
			{@const radioId = 'radio-test-' + color.value}
			<input id={radioId} value={color.value} type="checkbox" bind:group={chosenColor} />
			<label for={radioId}>
				<span>{color.text}</span>
			</label>
		{/each}
	</div>

	{#if chosenColor}
		<p>
			Your favorite colors: {chosenColor.join(', ')}.
		</p>
	{/if}
</Fieldset>

<Fieldset legend="Select a font style" fieldsetClasses="f-column">
	<div class="sx-toggles">
		{#each icons as radio}
			{@const radioId = 'radio-test-' + radio}
			<input id={radioId} value={radio} type="radio" bind:group={chosenFontStyle} />
			<label for={radioId}>
				<Icon icon={radio} />
			</label>
		{/each}
	</div>
</Fieldset>

<script lang="ts">
	import { Fieldset, Icon } from '$lib';
	let chosenColor = ['orange', 'blue'],
		chosenFontStyle = 'italic';

	const colors = [
		{ value: 'red', text: 'Red' },
		{ value: 'orange', text: 'Orange' },
		{ value: 'yellow', text: 'Yellow' },
		{ value: 'green', text: 'Green' },
		{ value: 'blue', text: 'Blue' },
		{ value: 'indigo', text: 'Indigo' },
		{ value: 'violet', text: 'Violet' },
	];

	const icons = ['bold', 'italic', 'underline'];
</script>
