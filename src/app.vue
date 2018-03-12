<template>
	<table class="u-full-width">
		<thead>
		<tr>
			<th>Name</th>
			<th>Realease Date</th>
			<th>Director</th>
			<th>Synopsis</th>
			<th>Edit</th>
			<th>Delete</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="">
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td><button class="button fa fa-pencil-alt" v-on:click="modify(movie)"></button></td>
			<td><button class="button fa fa-trash-alt" v-on:click="remove(movie)"></button></td>
		</tr>
		</tbody>
	</table>
</template>

<script>
	export default {
		data() {
			return {
				message: "Hello"
			}
		}
	}
</script>

<style>
	#msg {
		color: red;
	}
</style>