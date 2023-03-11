<script>
	/** @type {import('./$types').LayoutData} */
	//export let data
	import '$lib/scss/global.scss'
	import Nav from './Nav.svelte'
	import Footer from './Footer.svelte'
</script>

<svelte:head>
	<title>FullKit Template</title>
	<meta name="description" content="" />
</svelte:head>

<div class="wrap-main">
	<header>
		<b>Logo</b>
		<Nav />
	</header>

	<main>
		<div>
			<slot />
		</div>
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style lang="scss">
	//wish we had subgrid............ somedayTM
	main {
		grid-column: 1 / 4;
		display: grid;
		grid-template-columns: minmax(1rem, 1fr) minmax(0, 60rem) minmax(1rem, 1fr);
		grid-template-areas: '. content .';
		background-color: var(--clr-background-dark);

		& > * {
			grid-column: content;
		}
	}

	header {
		padding-block: var(--spacer-sml, 1.25rem);
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;

		b {
			font-size: var(--font-med, 1.5rem);
		}
	}

	footer {
		padding-block: var(--spacer-sml, 1rem);
	}
</style>
