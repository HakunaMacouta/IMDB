<template>
	<div class="column is-12-mobile is-4-tablet is-3-desktop is-2-fullhd">
		<div class="card">
			<div class="card-image">
				<figure class="image">
					<img :src="movie.poster_url" alt="Movie Poster">
					<div v-on:click="movieDetails" class="background-overlay">
					</div>
					<div class="overlay">
						<div class="details">
							<router-link :to="'/movie/' + movie.id" class="fas fa-lg fa-search"/>
						</div>
					</div>
				</figure>
			</div>
			<header>
				<div>

				</div>
				<h1 class="movie-title">
					{{ movie.title }}
				</h1>
				<h2 class="movie-info">
					<span class="movie-director">{{movie.firstname + ' ' + movie.lastname}}</span>
					<span class="movie-year">{{movie.year}}</span>
				</h2>
			</header>
		</div>
	</div>
</template>

<script>
	export default {
		name: "movie-thumbnail",
		props: [ "movie" ],
		data: function(){
			return {
			}
		},
		methods: {
			movieDetails : function(movie) {
				this.$router.push({name : 'details', params : {movie}});
			}
		},
	}

</script>

<style scoped lang="scss">
</style>