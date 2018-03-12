<template>
	<div>
		<ul>
			<movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie"
						v-on:edit="edit" v-on:remove="remove(index)" />
		</ul>

		<p>Movie number : {{movies.length}}</p>
		<p>New movie<br />
			Title : <input type="text" v-model="movie_to_add.title" /><br />
			Year : <input type="text" v-model="movie_to_add.year" /><br />
			Synopsis : <textarea v-model="movie_to_add.synopsis"></textarea><br />
			<button class="button-primary" v-on:click="newmovie">Add</button></p>

		Search : <input type="text" v-model="search" />



		<p v-if="movie_to_edit">New movie<br />
			Title : <input type="text" v-model="movie_to_edit.title" /><br />
			Year : <input type="text" v-model="movie_to_edit.year" /><br />
			Synopsis : <textarea v-model="movie_to_edit.synopsis"></textarea><br />
			<button class="button" v-on:click="save">Save</button></p></div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'Hello Vue!',
				display: true,
				movie_to_add: {},
				movie_to_edit: null,
				search: "",
				movies: [
					{
						title: "L'étrange noël de M. Jack",
						year: 1994,
						synopsis: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
					},
					{
						title: "Interstellar",
						year: 2014,
						synopsis: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
					}
				]
			}
		},
		methods: {
			newmovie: function() {
				this.movies.push(this.movie_to_add);
				this.movie_to_add = {};
			},
			edit: function(movie) {
				this.movie_to_edit = movie;
			},
			save: function() {
				this.movie_to_edit = null;
			},
			remove: function(index) {
				this.movies.splice(index, 1);
			}
		},
		created: function() {
			console.log("Created")
		},
		computed: {
			movies_search: function() {
				return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!==-1);
			}
		}
	}
</script>

<style scoped>
</style>