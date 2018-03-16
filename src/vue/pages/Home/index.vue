<template>
	<div id="container-movie-list" class="container is-fluid ">
		<div class="control has-icons-right">
			<input class="input is-medium" type="text" placeholder="Search">
			<span class="icon is-right">
				<i class="fas fa-search"></i>
			</span>
			Movies : {{movies_search.length}}
		</div>
		<div id="movie-list" class="columns">
			<movie-item class="movie-item" v-for="(movie, index) in movies_search" v-bind:key="movie.title"
						v-bind:movie="movie" v-on:edit="edit" v-on:remove="remove(index)" />
			<div id="add-card" class="column is-12-mobile is-4-tablet is-3-desktop is-2-fullhd">

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name:'movie-list',
				display: true,
				movie_to_add: {},
				movie_to_edit: null,
				search: "",
			}
		},
		methods: {
			edit: function(movie) {
				this.movie_to_edit = movie
			},
			save: function() {
				this.movie_to_edit = null
			},
			remove: function(index) {
				window.movies.splice(index, 1)
			},

		},
		created: function() {
		},
		computed: {
			movies_search: function() {
				return window.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!==-1);
			}
		}
	}
</script>

<style scoped>

</style>