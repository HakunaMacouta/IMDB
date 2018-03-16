<template>
	<div class="column is-12-mobile is-4-tablet is-3-desktop is-2-fullhd">
		<div class="card">
			<div class="card-image">
				<figure class="image">
					<img src="http://via.placeholder.com/916x1056" alt="Placeholder image">
					<div class="overlay">
						<div class="overlay-details">
							<router-link :to="'/movie/' + movie.id" class="fas fa-lg fa-search"/>
							<router-link :to="'/edit/' + movie.id" class="fas fa-lg fa-pencil-alt"/>
							<a @click="remove" class="fas fa-lg fa-trash-alt"></a>
						</div>
					</div>
				</figure>
			</div>
			<header>
				<p>
					{{movie.title}}
				</p>
			</header>
			<!--<div class="card-content">-->
				<!--<div class="content">-->
					<!--<div class="card-synopsis">-->
						<!--{{movie.synopsis}}-->
					<!--</div>-->
					<!--<div class="tags">-->
						<!--<span v-for="genre in movie.genres" class="tag">{{genre}}</span>-->
					<!--</div>-->
				<!--</div>-->
			<!--</div>-->
			<!--<footer class="card-footer">-->
				<!--<router-link :to="'/movie/' + movie.id" class="card-footer-item">Details</router-link>-->
				<!--<router-link :to="'/edit/' + movie.id" class="card-footer-item">Edit</router-link>-->
				<!--<a href="#" class="card-footer-item" @click="remove">Delete</a>-->
			<!--</footer>-->
		</div>
	</div>
</template>

<script>
	export default {
		name: "movie-item",
		props: [ "movie" ],
		data: function(){
			return {
				display_details: false
			}
		},
		methods: {
			edit() {
				this.$emit('edit', this.movie)
			},
			remove() {
				this.$emit('remove')
			}
		},
		mounted: function() {
			console.log("Mounted ", this.movie)
		}
	}

</script>

<style scoped>

</style>