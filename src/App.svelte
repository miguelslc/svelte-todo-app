<script>
	export let name;
	import Header from "./components/Header.svelte";
	import List from "./components/List.svelte";
</script>

<style>
	.container {
		text-align: center;
		padding: 1em;
		width: 500px;
		background: #009579;
	}

	:global(.container *){
		font-family: sans-serif;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<div class="container">
	<Header />
	Sample Text
	<List />
</div>
