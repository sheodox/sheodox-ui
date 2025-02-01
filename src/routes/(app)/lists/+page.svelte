<style lang="scss">
	.list-demo {
		width: 20rem;
		max-width: 100%;
		padding: var(--sx-spacing-2);
		border-radius: 10px;
	}
	.lighter {
		background: var(--sx-gray-600);
	}
</style>

<div class="list-demo lighter">
	<h2>On a lighter background</h2>
	<ul class="sx-list m-4">
		<li class="sx-list-item">Oh My</li>
		<li class="sx-list-item">Spicy</li>
		<li class="sx-list-item">A third thing</li>
		<li class="sx-list-item">Wow four even</li>
	</ul>

	<ul class="sx-list m-4">
		<li class="sx-list-item two-columns">
			<span class="column">Something</span>
			<span class="column">123</span>
		</li>
		<li class="sx-list-item two-columns">
			<span class="column">Wow</span>
			<span class="column text-align-right">12,341<Icon icon="download" cl="pl-2" /></span>
		</li>
		<li class="sx-list-item">Spicy</li>
		<li class="sx-list-item">A third thing</li>
		<li class="sx-list-item">Wow four even</li>
	</ul>

	<ul class="sx-list m-4">
		<li class="sx-list-item action">
			<button>
				<Icon icon="copy" /> Copy
			</button>
		</li>
		<li class="sx-list-item action">
			<button>
				<Icon icon="user-circle" /> Profile
			</button>
		</li>
		<li class="sx-list-item action">
			<a href="/" class="button text-align-center">
				<Icon icon="cog" /> Settings
			</a>
		</li>
	</ul>
</div>

<div class="list-demo">
	<h2>On the page background</h2>
	<ul class="sx-list m-4">
		<li class="sx-list-item">Oh My</li>
		<li class="sx-list-item">Spicy</li>
		<li class="sx-list-item">A third thing</li>
		<li class="sx-list-item">Wow four even</li>
	</ul>
</div>

<script lang="ts">
	import { Icon } from '$lib';
</script>
