<Stack dir="c" gap={4}>
	<Accordion buttonClasses="primary">
		<span slot="title">Accordion as Primary</span>
		<div>
			<p class="mt-0">this is some text!</p>
			<p>this is some text!</p>
			<p>this is some text!</p>
			<p>this is some text!</p>
			<p>this is some text!</p>
			<p class="mb-0">this is some text!</p>
		</div>
	</Accordion>

	<Accordion>
		<span slot="title">Accordion</span>
		<div>
			<p class="mt-0">this is some text!</p>
			<p>this is some text!</p>
			<p>this is some text!</p>
			<p>this is some text!</p>
			<p>this is some text!</p>
			<p class="mb-0">this is some text!</p>
		</div>
	</Accordion>

	<Accordion open>
		<span slot="title">Default open</span>
		<div>
			<p class="mt-0">this is some text!</p>
			<p>this is some text!</p>
			<p>this is some text!</p>
			<p>this is some text!</p>
			<p>this is some text!</p>
			<p class="mb-0">this is some text!</p>
		</div>
	</Accordion>

	<Accordion variant="horizontal">
		<span slot="title">Default open</span>
		<div>
			<button class="tertiary m-0">One</button>
			<button class="tertiary m-0">Two</button>
		</div>
	</Accordion>
</Stack>

<script lang="ts">
	import { Accordion, Stack } from '$lib';
</script>
