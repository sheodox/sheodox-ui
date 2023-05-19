<div class="f-column gap-4 mb-6">
	<style>
		textarea {
			width: 30rem;
			height: 20rem;
		}
	</style>

	<label
		>Text<br />
		<textarea bind:value={text} />
	</label>

	<TextInput type="number" min={0} max={200} bind:value={maxUrlLength}>Max URL path length</TextInput>
</div>

<Fieldset legend="Default rich text">
	<div class="p-4 has-inline-links ws-pre-line">
		<RichText {text} />
	</div>
</Fieldset>

<Fieldset legend="Rich text without path length limits">
	<div class="p-4 has-inline-links ws-pre-line">
		<RichText {text} maxDisplayedPathLength={0} />
	</div>
</Fieldset>

<Fieldset legend="Rich text using input's value">
	<div class="p-4 has-inline-links ws-pre-line">
		<RichText {text} maxDisplayedPathLength={maxUrlLength} />
	</div>
</Fieldset>

<script lang="ts">
	import { RichText, TextInput } from '$lib';
	import Fieldset from '$lib/Fieldset.svelte';

	let text =
		'this link is to a city https://goo.gl/maps/YmnzVoQuV1jmXXwx7 but have you ever been to https://dicechest.com/ yeah of course';
	let maxUrlLength = 30;
</script>
