<div class="f-row gap-5 align-items-start">
	<div class="card">
		<div class="card-body">This is the body of a card</div>
	</div>

	<div class="card">
		<div class="card-title">Card Title</div>
		<div class="card-body">This is the body of a card</div>
	</div>

	<div class="card two-tone">
		<div class="card-title">Two tone</div>
		<div class="card-body">This is the body of a card</div>
	</div>

	<div class="card clickable">
		<div class="card-body">This is a clickable card, notice the hover styles</div>
	</div>

	<div class="card card-image clickable">
		<img src={mountains} alt="mountains" />
		<div class="card-inset">
			<div class="card-title">Card title</div>
			<div class="card-body">this is the body of that card</div>
		</div>
	</div>
</div>

<script lang="ts">
	import mountains from '$lib/pictures/mountains.jpg';
</script>
