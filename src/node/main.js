/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */
import 'bulma/css/bulma.css'

import Vue from 'vue' //librairie "vue" dans node_modules
import app from '../vue/app.vue' //fichier app.vue local
import { router } from './routes';
import movieItem from '../vue/components/movie.vue';
import navbar from '../vue/components/navbar';

window.movies = [
	{
		id: 1,
		title: "L'étrange noël de M. Jack",
		year: 1994,
		lang: 'fr',
		director : {
			firstName : 'Tim',
			lastName : 'Burton',
			nationality : 'fr',
			birthDate : '10/01/2017'
		},
		genres : ['fantastic'],
		synopsis: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
	},
	{
		id: 2,
		title: "L'étrange noël de M. Jack",
		year: 1994,
		lang: 'fr',
		director : {
			firstName : 'Tim',
			lastName : 'Burton',
			nationality : 'fr',
			birthDate : '10/01/2017'
		},
		genres : ['fantastic'],
		synopsis: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
	},
	{
		id: 3,
		title: "L'étrange noël de M. Jack",
		year: 1994,
		lang: 'fr',
		director : {
			firstName : 'Tim',
			lastName : 'Burton',
			nationality : 'fr',
			birthDate : '10/01/2017'
		},
		genres : ['fantastic'],
		synopsis: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
	},
	{
		id: 4,
		title: "L'étrange noël de M. Jack",
		year: 1994,
		lang: 'fr',
		director : {
			firstName : 'Tim',
			lastName : 'Burton',
			nationality : 'fr',
			birthDate : '10/01/2017'
		},
		genres : ['fantastic'],
		synopsis: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
	},
	{
		id: 5,
		title: "L'étrange noël de M. Jack",
		year: 1994,
		lang: 'fr',
		director : {
			firstName : 'Tim',
			lastName : 'Burton',
			nationality : 'fr',
			birthDate : '10/01/2017'
		},
		genres : ['fantastic'],
		synopsis: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
	},
	{
		id: 6,
		title: "L'étrange noël de M. Jack",
		year: 1994,
		lang: 'fr',
		director : {
			firstName : 'Tim',
			lastName : 'Burton',
			nationality : 'fr',
			birthDate : '10/01/2017'
		},
		genres : ['fantastic'],
		synopsis: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
	},
];

Vue.component('movie-item', movieItem);
Vue.component('navbar', navbar);

Vue.options.devtools = true;

new Vue({
	el: '#app',
	router,
	render: h => h(app)
});

