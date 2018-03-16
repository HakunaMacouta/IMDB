
<template>
	<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="src/static/img/IMDB_Logo_2016.svg" alt="Bulma: a modern CSS framework based on Flexbox">
			</a>

			<div class="navbar-burger">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="navbar-menu">
			<!-- navbar start, navbar end -->
			<div class="navbar-start">
				<!-- navbar items -->
				<router-link class="navbar-item" to="/">All films</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "navbar"
	}
</script>

<style scoped>

</style>