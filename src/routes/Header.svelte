<header>
	<b>Logo</b>
	<nav>
		<ul>
			<li><a href="#link1">Link1</a></li>
			<li><a href="#link2">Link2</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		grid-column: 2 / 3;
		padding-block: var(--spacer-h-sml, 1.25rem);
		display: grid;
		grid-template-columns: 1fr auto;
	}

	ul {
		margin: 0;
		list-style: none;
		display: grid;
		grid-auto-flow: column;
		gap: var(--spacer-h-sml, 1rem);
	}
</style>
