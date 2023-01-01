<button on:click={autoExpire} class="secondary">Create auto-expire toast</button>
<button on:click={autoExpireError} class="secondary">Create auto-expire error toast</button>
<br />
<button on:click={persistent} class="secondary">Create persistent toast</button>
<br />
<button on:click={errorTechnical} class="secondary">Error with technical details</button>
<br />
<button on:click={progress} class="secondary">Progress</button>
{#if hasProgress}
	<button on:click={progressComplete} class="secondary">Set Progress Complete</button>
{/if}

<script lang="ts">
	import { createAutoExpireToast, createPersistentToast, createProgressToast, updateToast } from '$lib';

	function autoExpire() {
		createAutoExpireToast({
			title: 'Toast Title',
			message: 'Toast message',
		});
	}

	function autoExpireError() {
		createAutoExpireToast({
			title: 'Error Toast Title',
			message: 'Toast message',
			variant: 'error',
		});
	}

	function errorTechnical() {
		const e = new TypeError('An error occurred');
		createPersistentToast({
			title: 'Error Toast Title',
			message: 'Toast message',
			variant: 'error',
			technicalDetails: e.name + ': ' + e.message + '\n' + e.stack,
		});
	}

	function persistent() {
		createPersistentToast({
			title: 'Toast that stays',
			message: 'Toast message',
		});
	}

	let progressToastId: number | null = null;
	$: hasProgress = progressToastId !== null;

	function progress() {
		progressToastId = createProgressToast({
			title: 'Progress',
			message: 'This is a progress toast.',
			min: 0,
			max: 3,
			value: 1,
		});
	}
	function progressComplete() {
		if (progressToastId !== null) {
			updateToast(progressToastId, {
				value: 3,
			});
			progressToastId = null;
		}
	}
</script>
