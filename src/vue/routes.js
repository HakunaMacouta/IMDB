/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */
import VueRouter from 'vue-router';
import moviesList from './pages/moviesList'
import movieDetails from './pages/movieDetails'

let routes = [
	{
		path: '/',
		name: "list",
		component: moviesList
	},
	{
		path: '/movie/:id',
		name : 'details',
		component : movieDetails
	},

];

export const router = new VueRouter({
	routes,
});