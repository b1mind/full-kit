<script>
	/** @type {import('./$types').LayoutData} */
	//export let data
	import '$lib/scss/global.scss'
	import Header from './Header.svelte'
</script>

<svelte:head>
	<title>FullKit Template</title>
	<meta name="description" content="" />
</svelte:head>

<div class="wrap-main">
	<Header />

	<main>
		<slot />
	</main>

	<footer>This is a Footer</footer>
</div>

<style lang="scss">
	.wrap-main {
		display: grid;
		min-height: 100%;
		//todo breakout margins and tie into $media vars for main content max
		grid-template-columns: minmax(1rem, 1fr) minmax(0, 60rem) minmax(1rem, 1fr);
		grid-template-rows: auto 1fr auto;

		//todo util for this and full/mid/sml look at example
		//only works if element is direct child not a component.. use ignore or?
		& > * {
			grid-column: 2 / 3;
		}
	}
</style>
