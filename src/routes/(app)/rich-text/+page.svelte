<p>The RichText component takes a string of text and will render it as text with clickable links.</p>

<div class="f-column gap-4 mb-6">
	<style>
		textarea {
			width: 30rem;
			height: 20rem;
		}
	</style>

	<div class="f-row gap-4">
		<label class="f-1"
			>Source Text<br />
			<textarea bind:value={text} />
		</label>
		<label class="f-1"
			>Parsed Segments<br />
			<textarea bind:value={parsedText} readonly />
		</label>
	</div>
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
	<div class="p-4 gap-4 f-column">
		<TextInput type="number" min={0} max={200} bind:value={maxPathLength}>Max URL path length</TextInput>
		<div class="has-inline-links ws-pre-line">
			<RichText {text} maxDisplayedPathLength={maxPathLength} />
		</div>
	</div>
</Fieldset>

<script lang="ts">
	import { RichText, TextInput } from '$lib';
	import Fieldset from '$lib/Fieldset.svelte';
	import { parseRichText } from '$lib/parseRichText';

	let text =
		'this link is to a city https://goo.gl/maps/YmnzVoQuV1jmXXwx7 but have you ever been to https://dicechest.com/ yeah of course';
	let maxPathLength = 10;

	$: parsedText = JSON.stringify(parseRichText(text), null, 2);
</script>
