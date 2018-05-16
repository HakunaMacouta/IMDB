<template>
	<div class="column is-12-mobile is-4-tablet is-3-desktop is-2-fullhd">
		<div class="card">
			<div class="card-image">
				<figure class="image">
					<img :src="movie.posterURL" alt="Placeholder image">
					<div class="background-overlay">
					</div>
					<div class="overlay">
						<div class="movie-title">
							{{ movie.title }}
						</div>
						<div class="details">
							<router-link :to="'/movie/' + movie.id" class="fas fa-lg fa-search"/>
							<router-link :to="'/movie/' + movie.id + '/edit'" class="fas fa-lg fa-pencil-alt"/>
							<a @click="remove(movie)" class="fas fa-lg fa-trash-alt"></a>
						</div>
					</div>
				</figure>
			</div>
			<header>
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
				display_details: false
			}
		},
		methods: {
			remove(movie) {
				this.$store.dispatch('removeMovie', this.$store.state.movies.indexOf(movie));
			}
		},
	}

</script>

<style scoped lang="scss">
	.card header {
		background-color: transparent;
	}

	.background-overlay {
		position: absolute;
		background-color: #373a3d;
		opacity: 0;
		transition: .5s ease;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
	.overlay {
		position: absolute;
		top:0;
		left:0;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		height: 100%;
		width: 100%;
		opacity: 0;
		transition: .5s ease;

		.movie-title {
			text-align: center;
			justify-content: center;
			font-size: large;
			margin:15px;
			color:white;
			border: 1px solid white;
		}

		.details {
			text-align: center;
			a {
				margin: 0 0 15px 10px;
				color: white;
				&:hover {
					color: #767b82;
				}
			}
		}
	}

	.image:hover {
		.background-overlay {
			opacity: 0.6;
		}
		.overlay {
			opacity: 1;
		}
	}
</style>