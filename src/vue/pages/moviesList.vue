<template>
	<div id="container-movies-list" class="column">
		<div id="movie-list" class="columns">
			<div class="column is-2" style="margin: 5px"></div>
			<movie-thumbnail class="movie-item" v-for="movie in movies_search" v-bind:key="movie.id"
						v-bind:movie="movie" />
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
		created : function() {
			console.log(new Date("06/01/1975").toDateString());
			this.$store.dispatch('allMovies');
		},
		methods: {
		},
		computed: {
			movies_search: function() {
				return this.$store.state.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!==-1);
			}
		}
	}
</script>

<style scoped lang="scss">
	#container-movie-list {

	}
</style>