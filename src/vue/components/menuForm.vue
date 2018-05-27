<template>
	<div class="column is-2 menu absolute" ref="form">
		<div class="menu-header">
			<span v-on:click="closeForm" class="menu-backbutton fas fa-lg fa-angle-double-left"></span>
			<span v-if="$route.name==='list'" class="menu-label">Add Movie</span>
			<span v-else-if="$route.name==='details'" class="menu-label">Edit Movie</span>
		</div>
		<form id="addForm" @submit.prevent="submitForm" method="post">
			<p class="menu-label">
				Movie
			</p>
			<div class="field">
				<div class="control">
					<input name="title" v-model="movie.title" class="input" type="text" placeholder="Title" required>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<div class="select">
						<select v-model="movie.year" class="year" title="year" name="year" >
							<option selected disabled hidden>Release year</option>
							<option v-for="i in 150" :value="new Date().getFullYear() - i  + 1">{{ new Date().getFullYear() - i  + 1}}</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<div class="select">
						<select v-model="movie.lang" class="lang" name="lang" title="lang">
							<option value="" selected disabled hidden>Film nationality</option>
							<option v-for="nat in this.$store.state.nationality" :value="nat">{{nat}}</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<div class="select">
						<select v-model="movie.genre" class="lang" title="genre" name="genre">
							<option value="" selected disabled hidden>Genre</option>
							<option v-for="genre in this.$store.state.genres" :value="genre">{{genre}}</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<textarea name="synopsis" v-model="movie.synopsis" class="textarea" type="text" placeholder="Synopis" required></textarea>
				</div>
			</div>
			<p class="menu-label">
				Director
			</p>
			<div class="field">
				<div class="control">
					<input name="firstname" v-model="movie.firstname" class="input" type="text" placeholder="Director Firstname" required>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<input name="lastname" v-model="movie.lastname" class="input" type="text" placeholder="Director Lastname" required>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<input name="birthdate" v-model="movie.birthdate" class="input" type="date" placeholder="Director birthdate" required>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<div class="select">
						<select v-model="movie.nationality" class="lang" title="genre" name="nationality">
							<option value="" selected disabled hidden>Director nationality</option>
							<option v-for="nat in this.$store.state.nationality" :value="nat">{{nat}}</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field is-grouped">
				<div class="control">
					<button type="submit" class="button is-link">Submit</button>
				</div>
				<div v-show="$route.name==='list'" class="control">
					<button v-on:click="resetForm" class="button is-text">Cancel</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import anime from 'animejs'
	import axios from 'axios'

	export default {
		name: "menu-form",
		data() {
			return {
				movie : {
					title : '',
					year : 0,
					lang : '',
					genre : '',
					synopsis : '',
					firstname : '',
					lastname : '',
					birthdate : null,
					nationality : '',
					poster_url : '/src/static/img/default_poster.png',
				}
			}
		},
		methods : {
			closeForm : function() {
				this.resetForm();
				anime({
					targets : '.menu.absolute',
					translateX : 0,
					easing: 'easeInOutQuart'
				})
			},
			created : function() {
				console.log("form mounted");
				if(this.$route.name === 'details' ) {
					this.movie = this.$store.getters.getMovieById(this.$route.params.id);
					console.log(this.movie);
				}
			},
			resetForm : function() {
				document.getElementById("addForm").reset();
			},
			submitForm: function() {
				console.log("submitForm");
				if(this.$route.name === 'list') {
					this.$store.dispatch('addMovie', this.movie).then(()=> {
						this.$store.dispatch('allMovies')
					});
				} else if(this.$route.name === 'details') {
					this.$store.dispatch('editMovie', this.movie);
				}
			}
		}
	}
</script>

<style scoped lang="scss">

</style>