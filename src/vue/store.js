/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */
import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);

export const movieStore = new Vuex.Store({
	state: {
		movies: [
			{
				id: 1,
				IMDBkey : "tt0107688",
				posterURL : "https://ia.media-imdb.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_SX300.jpg",
				title: "L'étrange noël de M. Jack",
				year: 1994,
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
				IMDBkey : "tt0107688",
				posterURL : "https://ia.media-imdb.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_SX300.jpg",
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
			}
		],
		genres : ['Comedy', 'Sci-fi', 'Horror', 'Romance', 'Action', 'Thriller', 'Drama', 'Mystery', 'Crime', 'Animation', 'Adventure', 'Fantasy', 'Superhero']
	},
	mutations: {
		addMovie(state) {
			state.movies.push({
				id: state.movies.length + 1,
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
			})
		},
		removeMovie(state, index) {
			state.movies.splice(index, 1);
		}
	},
	actions: {
		addMovie(context) {

			context.commit('addMovie');
		},
		removeMovie(context, index) {
			context.commit('removeMovie', index);
		}
	}
});