<div class="f-column gap-3">
	<label for="test-progress-minimal">Minimal Progress</label>
	<Progress id="test-progress-minimal" max={100} min={0} value={50} variant="minimal" />

	<label for="test-progress-slim">Slim Progress</label>
	<Progress id="test-progress-slim" max={100} min={0} value={50} variant="slim" />

	<label for="test-progress">Progress</label>
	<Progress id="test-progress" max={100} min={0} value={50} />

	<label for="test-progress-moving">Moving Progress</label>
	<Progress id="test-progress" max={100} min={0} value={movingProgressValue} />

	<label for="test-progress-empty">Empty Progress</label>
	<Progress id="test-progress-empty" max={100} min={0} value={0} />

	<label for="test-progress-max">Complete Progress</label>
	<Progress id="test-progress-max" max={100} min={0} value={100} />
</div>

<script lang="ts">
	import { Progress } from '$lib';

	let movingProgressValue = 0;
	setInterval(() => {
		movingProgressValue = (movingProgressValue + Math.random() * 30) % 100;
	}, 1000);
</script>
