<template>
	<div class="column">
		<menu-form />
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
				<div class="columns">
					<div class="column">
						<h3>Average</h3>
						<p> <star-rating :rating="average" :star-size="35" :increment="0.1" :read-only="true" /> </p>
					</div>
					<div class="column">
						<h3>Mark</h3>
						<p> <star-rating @rating-selected ="setRating" :rating="movie.mark" :star-size="35" :increment="0.5" /> </p>
					</div>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column is-2"></div>
			<div class="column ad">
				<img src="/src/static/img/advertisement.gif" alt="ad" />
			</div>
		</div>
	</div>
</template>

<script>
	import StarRating from "vue-star-rating/src/star-rating";

	export default {
		components: {StarRating},
		name: "movie-details",
		data() {
			return {
				id: Number(this.$route.params.id),
				mark : 0
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
			},
			average : function() {
				let res = 0;
				for(let i = 0; i < 100; i++) {
					res += (Math.random() * (5 - 2 + 1) + 2) ;
				}
				return res/100;

			}
		},
		methods : {
			setRating : function(rating) {
				console.log(rating);
				this.$store.dispatch('setRating', {id : this.id, rating : rating});
			}
		}
	}
</script>

<style scoped lang="scss">

</style>