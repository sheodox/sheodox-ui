<style>
	:global(.long-fieldset) {
		width: 10rem;
	}
	.long-fieldset-tests {
		width: 20rem;
		border: 1px solid var(--sx-gray-transparent-light);
		padding: var(--sx-spacing-1);
		overflow: hidden;
	}
</style>

<div class="f-row f-wrap gap-3 m-3 justify-content-center align-items-center">
	<Fieldset legend="Normal fieldset">
		<p>this is some fieldset content</p>
	</Fieldset>

	<Fieldset legend="Tab" variant="tab">
		<p>this is some fieldset content</p>
	</Fieldset>

	<Fieldset legend="Bordered" variant="bordered">
		<p>this is some fieldset content</p>
		<Fieldset legend="Bordered" variant="bordered">
			<p>this is some fieldset content</p>
		</Fieldset>
	</Fieldset>

	<Fieldset legend="Small fieldset" size="small">
		<p>this is some fieldset content</p>

		<Fieldset legend="Inner fieldset" size="small">
			<p>this is a fieldset inside another one</p>
		</Fieldset>
	</Fieldset>

	<div class="long-fieldset-tests">
		<Fieldset
			legend="This fieldset has a very very very very very very very very long title"
			fieldsetClasses="long-fieldset align-self-center"
		>
			<p>this is some fieldset content</p>
		</Fieldset>

		<Fieldset
			legend="This fieldset has a very very very very very very very very long title"
			fieldsetClasses="long-fieldset align-self-center"
			variant="tab"
		>
			<p>this is some fieldset content</p>
		</Fieldset>

		<Fieldset
			legend="This fieldset has a very very very very very very very very long title"
			fieldsetClasses="long-fieldset align-self-center"
			variant="bordered"
		>
			<p>this is some fieldset content</p>
		</Fieldset>
	</div>

	<Fieldset legend="Small fieldset" size="small" centeredLegend mutedLegend>
		<p>this one has different styles</p>
	</Fieldset>
	<Fieldset legend="Small fieldset" size="small" centeredLegend mutedLegend variant="tab">
		<p>this one has different styles</p>
	</Fieldset>

	<Fieldset legend="Large fieldset" size="large">
		<p>this is some fieldset content</p>
	</Fieldset>

	<Fieldset legend="Large fieldset" size="large" variant="tab">
		<p>this is some fieldset content</p>
	</Fieldset>

	<Fieldset legend="Large fieldset" size="large" variant="bordered">
		<p>this is some fieldset content</p>
	</Fieldset>
</div>

<script lang="ts">
	import { Fieldset } from '$lib';
</script>
