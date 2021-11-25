<button on:click={autoExpire}>Create auto-expire toast</button>

<script>
	import { createAutoExpireToast } from '../lib';

	function autoExpire() {
		createAutoExpireToast({
			title: 'Toast Title',
			message: 'Toast message',
		});
	}
</script>
