<button on:click={autoExpire} class="secondary">Create auto-expire toast</button>
<button on:click={autoExpireError} class="secondary">Create auto-expire error toast</button>
<br />
<button on:click={persistent} class="secondary">Create persistent toast</button>
<br />
<button on:click={errorTechnical} class="secondary">Error with technical details</button>

<script>
	import { createAutoExpireToast, createPersistentToast } from '../lib';

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
</script>
