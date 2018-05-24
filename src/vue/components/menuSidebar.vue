
<template>
	<aside class="column is-2 menu" aria-label="main navigation">
		<img class="menu-logo" src="/src/static/img/logo_flat.png" alt="logo TV Time" />
		<div v-if="this.$route.name === 'list'"
			 class="menu-item control has-icons-left has-icons-right">
			<input class="input is-small" type="email" placeholder="Search">
			<span class="icon is-small is-right">
    			<i class="fas fa-search"></i>
  			</span>
		</div>
		<ul class="menu-item menu-list">
			<li>
				<ul>
					<li><router-link :to="{ path : '/' }"><i class="fas fa-compass"></i>Explore</router-link></li>
					<template v-if="this.$route.name === 'list'">
						<li><a v-on:click="openAddSidebar"><i class="fas fa-film"></i>Add movie</a></li>
					</template>
					<template v-else-if="this.$route.name === 'details'">
						<li><a><i class="fas fa-pen-square"></i>Edit</a></li>
						<li><a><i class="fas fa-trash"></i>Delete</a></li>
					</template>
				</ul>
			</li>
		</ul>
	</aside>
</template>

<script>
	export default {
		name: "menu-sidebar",
		methods : {
			openAddSidebar : function (event) {
				console.log("open");
			}
		}
	}
</script>

<style scoped>

</style>