/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import movieList from '../vue/pages/Home/index'

let routes = [
	{
		path: '/',
		component: movieList
	}
];

Vue.use(VueRouter);

export const router = new VueRouter({
	routes,
});