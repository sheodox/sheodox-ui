<Fieldset legend="Select your favorite color" fieldsetClasses="f-column">
	<div class="sx-toggles f-row align-self-start">
		{#each radios as radio}
			{@const radioId = 'radio-test-' + radio.value}
			<input id={radioId} value={radio.value} type="radio" bind:group={value} />
			<label for={radioId}>
				<span>{radio.text}</span>
			</label>
		{/each}
	</div>

	{#if value}
		<p>
			Your favorite color is {value}.
		</p>
	{/if}
</Fieldset>

<script lang="ts">
	import { Fieldset } from '$lib';
	let value = '';

	const radios = [
		{ value: 'red', text: 'Red' },
		{ value: 'orange', text: 'Orange' },
		{ value: 'yellow', text: 'Yellow' },
		{ value: 'green', text: 'Green' },
		{ value: 'blue', text: 'Blue' },
		{ value: 'indigo', text: 'Indigo' },
		{ value: 'violet', text: 'Violet' },
	];
</script>
