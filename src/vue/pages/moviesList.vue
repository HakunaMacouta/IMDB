<template>
	<div id="container-movies-list" class="column">
		<!--<div class="columns">-->
			<!--<div class="column">-->
				<!--<div class="control has-icons-right">-->
					<!--<input class="input is-medium" type="text" placeholder="Search">-->
					<!--<span class="icon is-right">-->
					<!--<i class="fas fa-search"></i>-->
				<!--</span>-->
				<!--</div>-->
			<!--</div>-->
			<!--<div class="white vertical-align column is-1">-->
				<!--Movies : {{movies_search.length}}-->
			<!--</div>-->
			<!--<div class="column is-1">-->
				<!--<router-link :to="'/add'" class="vertical-align button is-dark">-->
					<!--<span>Add</span>-->
					<!--<span class="icon">-->
     					 <!--<i class="fas fa-plus"></i>-->
    				<!--</span>-->
				<!--</router-link>-->
			<!--</div>-->
		<!--</div>-->

		<div id="movie-list" class="columns">
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
</style>