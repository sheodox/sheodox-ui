<div class="mb-2">
	<Breadcrumbs links={breadcrumbLinks} />
</div>

<table>
	<thead>
		<tr>
			<th>Normal</th>
			<th>Disabled</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><button use:ripple>Regular button</button></td>
			<td><button disabled>Regular button</button></td>
		</tr>
		<tr>
			<td><button class="tertiary" use:ripple>Tertiary button</button></td>
			<td><button class="tertiary" disabled>Tertiary button</button></td>
		</tr>
		<tr>
			<td><button class="secondary" use:ripple>Secondary button</button></td>
			<td><button class="secondary" disabled>Secondary button</button></td>
		</tr>
		<tr>
			<td><button class="primary" use:ripple>Primary button</button></td>
			<td><button class="primary" disabled>Primary button</button></td>
		</tr>
		<tr>
			<td><button class="danger" use:ripple>Danger button</button></td>
			<td><button class="danger" disabled>Danger button</button></td>
		</tr>
		<tr>
			<td><button class="galaxy" use:ripple>Galaxy button</button></td>
			<td><button class="galaxy" disabled>Galaxy button</button></td>
		</tr>
		<tr>
			<td><button class="inverted" use:ripple>Inverted button</button></td>
			<td><button class="inverted" disabled>Inverted button</button></td>
		</tr>
		<tr>
			<td><button class="inverted pill" use:ripple>Pill button</button></td>
			<td><button class="inverted pill" disabled>Pill button</button></td>
		</tr>
		<tr>
			<td><button class="electric" use:ripple>Electric button</button></td>
			<td><button class="electric" disabled>Electric button</button></td>
		</tr>
		<tr>
			<td>
				<button aria-pressed="true" use:ripple><span>Pressed button</span></button>
			</td>
			<td>
				<button aria-pressed="true" disabled><span>Pressed button</span></button>
			</td>
		</tr>
	</tbody>
</table>

<div class="f-row">
	<div style="width: 20rem;" class="f-column gap-3 p-3">
		<TextInput value="something">Text Input</TextInput>
		<TextInput value="something@example.com" type="email">EmailInput</TextInput>
		<TextInput value="" maxlength={5}>Text with maxlength</TextInput>
		<TextInput value="" type="password" maxlength={5}>Password with maxlength</TextInput>
		<TextInput value="">Text Input</TextInput>
		<TextInput value="0" type="number">Number Input</TextInput>
		<Checkbox checked={true}>Checkbox</Checkbox>
		<Checkbox checked={false}>Checkbox</Checkbox>
		<Search value="search text" />
		<Search value="search text" size="large" />

		<MenuButton>
			<span slot="trigger">Options <Icon icon="chevron-down" /></span>
			<ul slot="menu">
				<li><button><Icon icon="edit" /> Edit</button></li>
				<li><button><Icon icon="edit" /> Edit</button></li>
				<li><a class="button" href="/"><Icon icon="edit" /> Edit</a></li>
				<li><button><Icon icon="edit" /> Edit</button></li>
			</ul>
		</MenuButton>

		<div class="f-row">
			<TextInput value="Click focus to focus this" name="adsf" bind:inputElement>Text Input</TextInput>
			<button on:click={() => inputElement.focus()}>Focus</button>
		</div>

		<button on:click={() => (showAutoFocus = !showAutoFocus)} class="secondary"
			>{showAutoFocus ? 'Hide' : 'Show'} auto focusing input</button
		>
		{#if showAutoFocus}
			<TextInput autofocus value="">Text Input</TextInput>
		{/if}
	</div>
	<div style="width: 20rem;" class="f-column gap-3 p-3">
		<Select label="Some Select">
			<option value="" />
			<option value="one">One</option>
			<option value="two">Two</option>
			<option value="three">Three</option>
			<option value="long">Four Four Four Four Four Four Four Four Four Four Four</option>
			<option value="long-continuous">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</option>
		</Select>
	</div>
</div>

<p>
	<code>some code element</code>
</p>

<br />

<script lang="ts">
	import { MenuButton, Icon, TextInput, Checkbox, ripple, Breadcrumbs, Search, Select } from '$lib';

	let showAutoFocus = false,
		showTable = true;
	const breadcrumbLinks = [
		{ text: 'Home', href: '/' },
		{ text: 'User', href: '/' },
		{ text: 'Me', href: '/' },
	];

	let inputElement: HTMLInputElement;
</script>
