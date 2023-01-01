<table>
	<thead>
		<tr>
			<th>Normal</th>
			<th>Disabled</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><button>Regular button</button></td>
			<td><button disabled>Regular button</button></td>
		</tr>
		<tr>
			<td><button class="secondary">Secondary button</button></td>
			<td><button class="secondary" disabled>Secondary button</button></td>
		</tr>
		<tr>
			<td><button class="primary">Primary button</button></td>
			<td><button class="primary" disabled>Primary button</button></td>
		</tr>
		<tr>
			<td><button class="danger">Danger button</button></td>
			<td><button class="danger" disabled>Danger button</button></td>
		</tr>
		<tr>
			<td><button class="galaxy">Galaxy button</button></td>
			<td><button class="galaxy" disabled>Galaxy button</button></td>
		</tr>
		<tr>
			<td>
				<button aria-pressed="true"><span>Pressed button</span></button>
			</td>
			<td>
				<button aria-pressed="true" disabled><span>Pressed button</span></button>
			</td>
		</tr>
	</tbody>
</table>

<div style="width: 20rem;" class="f-column gap-3 p-3">
	<TextInput value="something">Text Input</TextInput>
	<TextInput value="">Text Input</TextInput>
	<TextInput value="0" type="number">Number Input</TextInput>
	<Checkbox checked={true}>Checkbox</Checkbox>
	<Checkbox checked={false}>Checkbox</Checkbox>
</div>

<code>some code element</code>

<br />

<script lang="ts">
	import { TextInput, Checkbox } from '$lib';
</script>
