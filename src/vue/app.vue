<template>
	<div>
		<div class="columns">
			<menu-sidebar />
			<menu-form />
			<router-view></router-view>
		</div>
		<!--<div>-->
		<!--&lt;!&ndash;<p>Movie number : {{movies.length}}</p>&ndash;&gt;-->
		<!--&lt;!&ndash;<p>New movie<br />&ndash;&gt;-->
		<!--&lt;!&ndash;Title : <input type="text" v-model="movie_to_add.title" /><br />&ndash;&gt;-->
		<!--&lt;!&ndash;Year : <input type="text" v-model="movie_to_add.year" /><br />&ndash;&gt;-->
		<!--&lt;!&ndash;Synopsis : <textarea v-model="movie_to_add.synopsis"></textarea><br />&ndash;&gt;-->
		<!--&lt;!&ndash;<button v-on:click="newmovie2">Add</button></p>&ndash;&gt;-->

		<!--&lt;!&ndash;Search : <input type="text" v-model="search" />&ndash;&gt;-->
		<!--</div>-->
		<!--<router-link to="/edit">Edit</router-link>-->
		<!--<router-view></router-view>-->
	</div>

</template>

<script>
	import MenuForm from "./components/menuForm";

	export default {
		components: {MenuForm}

	}
</script>

<style>
</style>