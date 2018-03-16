<template>
	<p v-if="movie_to_edit">New movie<br />
		Title : <input type="text" v-model="movie_to_edit.title" /><br />
		Year : <input type="text" v-model="movie_to_edit.year" /><br />
		Synopsis : <textarea v-model="movie_to_edit.synopsis"></textarea><br />
		<button v-on:click="save">Save</button></p>
</template>

<script>
	export default {
		name: "edit-movie"
	}
</script>

<style scoped>

</style>