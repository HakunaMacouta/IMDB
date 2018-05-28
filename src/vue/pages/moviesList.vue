<template>
	<div id="container-movies-list" class="columns">
		<menu-form></menu-form>
		<div class="column is-2" style="margin: 5px"></div>
		<div class="column">
			<div id="movie-list" class="columns">
				<movie-thumbnail class="movie-item" v-for="movie in movies_search" v-bind:key="movie.id"
								 v-bind:movie="movie" />
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				name:'movie-list',
				search:""
			}
		},
		mounted : function() {
			console.log("mounted");
			this.$store.dispatch('allMovies');
		},
		methods: {
		},
		computed: {
			movies_search: function() {
				return this.$store.state.movies.filter( (movie) => {
					console.log(movie);
					console.log(this.$store.state.search);
					return movie.title.toLowerCase().includes(this.$store.state.search.toLowerCase()) +
						// movie.year.toLowerCase().includes(this.$store.state.search.toLowerCase()) +
					movie.lang.toLowerCase().includes(this.$store.state.search.toLowerCase()) +
					movie.synopsis.toLowerCase().includes(this.$store.state.search.toLowerCase()) +
					movie.genre.toLowerCase().includes(this.$store.state.search.toLowerCase()) +
					movie.firstname.toLowerCase().includes(this.$store.state.search.toLowerCase()) +
					movie.lastname.toLowerCase().includes(this.$store.state.search.toLowerCase()) +
					// movie.birthdate.toLowerCase().includes(this.$store.state.search.toLowerCase()) +
					movie.nationality.toLowerCase().includes(this.$store.state.search.toLowerCase());
				});
			}
		}
	}
</script>

<style scoped lang="scss">
</style>