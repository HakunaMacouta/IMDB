<template>
	<div class="column is-2 menu absolute" ref="form">
		<div class="menu-header">
			<span v-on:click="closeForm" class="menu-backbutton fas fa-lg fa-angle-double-left"></span><span class="menu-label">Add Movie</span>
		</div>
		<form id="addForm" @submit="submitForm" method="post">
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
						<select class="year" title="year">
							<option name="year" v-model="movie.year" v-for="i in 150">{{ new Date().getFullYear() - i  + 1}}</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<div class="select">
						<select class="lang" title="genre">
							<option name="lang" v-model="movie.lang" v-for="nat in this.$store.state.nationality">{{nat}}</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<div class="select">
						<select class="lang" title="genre">
							<option name="genre" v-model="movie.genre" v-for="genre in this.$store.state.genres">{{genre}}</option>
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
						<select class="lang" title="genre">
							<option name="nationality" v-model="movie.nationality" v-for="nat in this.$store.state.nationality">{{nat}}</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field is-grouped">
				<div class="control">
					<button type="submit" class="button is-link">Submit</button>
				</div>
				<div class="control">
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
					synopsis : '',
					genre : '',
					firstname : '',
					lastname : '',
					birthdate : null,
					nationality : '',
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
			resetForm : function() {
				document.getElementById("addForm").reset();
			},
			submitForm: function() {
				console.log("submitForm");
				this.$store.dispatch('addMovie', this.movie);
			}
		}
	}
</script>

<style scoped lang="scss">

</style>