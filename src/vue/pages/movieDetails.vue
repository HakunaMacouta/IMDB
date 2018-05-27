<template>
	<div class="column">
		<div class="columns">
			<div class="column is-2"></div>
			<div class="details-image column is-3">
				<img :src="movie.poster_url" alt="movie Poster"/>
			</div>
			<div class="details-content column">
				<h1> {{ movie.title }} <span>( {{ movie.year }} )</span> </h1>
				<h2> {{ movie.firstname + ' ' + movie.lastname }} </h2>
				<p> {{ new Date(movie.birthdate).toLocaleDateString() }} ( {{ movie.nationality }} )</p>
				<h3> Synopsis </h3>
				<p> {{ movie.synopsis }} </p>
				<div class="columns">
					<div class="column">
						<h3> Genre </h3>
						<p> {{ movie.genre }} </p>
					</div>
					<div class="column">
						<h3> From </h3>
						<p> {{ movie.lang }} </p>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "movie-details",
		data() {
			return {
				id: Number(this.$route.params.id)
			}
		},
		beforeCreate : function() {
			if(this.$store.state.movies.length <= 0) {
				this.$router.push({name : 'list'})
			}
		},
		computed : {
			movie : function() {
				return this.$store.getters.getMovieById(this.id)
			}
		},
	}
</script>

<style scoped lang="scss">

</style>