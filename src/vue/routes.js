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
import movieEdit from './pages/movieEdit'
import movieDetails from './pages/movieDetails'
import movieAdd from './pages/movieAdd'

let routes = [
	{
		path: '/',
		component: moviesList
	},
	{
		path: '/movie/:id',
		component : movieDetails
	},
	{
		path: '/movie/:id/edit',
		component : movieEdit
	},
	{
		path: '/add',
		component : movieAdd
	}

];

export const router = new VueRouter({
	routes,
});