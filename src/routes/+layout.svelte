<script>
	/** @type {import('./$types').LayoutData} */
	//export let data
	import '$lib/scss/global.scss'
</script>

<div class="wrap-main">
	<header>This is a header</header>

	<main>
		<slot />
	</main>

	<footer>This is a Footer</footer>
</div>

<style lang="scss">
	.wrap-main {
		display: grid;
		min-height: 100%;
		grid-template-columns: minmax(1rem, 1fr) minmax(0, 50rem) minmax(1rem, 1fr);
		grid-template-rows: auto 1fr auto;

		//need a util for this and full/mid look at example
		& > * {
			grid-column: 2 / 3;
		}
	}
</style>
