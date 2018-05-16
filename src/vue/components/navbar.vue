
<template>
	<aside class="column is-9 menu" :style="{ height: fullHeight+'px' }" aria-label="main navigation">
		<img class="menu-logo" src="/src/static/img/logo_flat.png" alt="logo TV Time" />
	</aside>
</template>

<script>
	export default {
		name: "navbar",
		data() {
			return {
				fullHeight : document.documentElement.clientHeight
			}
		},
		mounted : function () {
			window.addEventListener('resize', this.handleResize)
		},
		beforeDestroy: function () {
			window.removeEventListener('resize', this.handleResize)
		},
		methods : {
			handleResize : function() {
				this.fullHeight = document.documentElement.clientHeight
			}
		}
	}
</script>

<style scoped>

</style>