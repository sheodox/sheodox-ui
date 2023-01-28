<Fieldset legend="Demo radio toggles" fieldsetClasses="f-column">
	<div class="sx-toggles f-row align-self-start">
		{#each radios as radio}
			{@const radioId = 'radio-test-' + radio.value}
			<div class="sx-radio">
				<input id={radioId} value={radio.value} type="radio" bind:group={value} />
				<label for={radioId}>
					<span>{radio.text}</span>
				</label>
			</div>
		{/each}
	</div>
</Fieldset>

<script lang="ts">
	import { Fieldset } from '$lib';
	let value = 'one';

	const radios = [
		{ value: 'one', text: 'One' },
		{ value: 'two', text: 'Two' },
		{ value: 'three', text: 'Three' },
		{ value: 'four', text: 'Four' },
		{ value: 'five', text: 'Five' },
	];
</script>
