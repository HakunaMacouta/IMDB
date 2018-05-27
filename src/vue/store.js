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
import Axios from "axios";

let url = "http://localhost:3000/api";

Vue.use(Vuex);

export const movieStore = new Vuex.Store({
	state: {
		movies : [],
		genres: ['Comedy', 'Sci-fi', 'Horror', 'Romance', 'Action', 'Thriller', 'Drama', 'Mystery', 'Crime', 'Animation', 'Adventure', 'Fantasy', 'Superhero'],
		nationality: ['Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Scottish', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian/Tobagonian', 'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean']
	},
	mutations: {
		allMovies: (state, movies) => {
			state.movies = movies
		},
		addMovie: (state, movie) => {
			state.movies.push(movie);
		},
		deleteMovie: (state, id) =>{
			if(id !== -1)
				state.movies.splice(id,1);
		},
		editMovie: (state, movie) =>{
			if(state.movies.findIndex(m => m.id === movie.id) !== -1)
				state.movies.splice(state.movies.findIndex(m => m.id === movie.id),1, movie);
		},
		setRating: (state, payload) => {
			if(payload.id !== -1) {
				state.movies.find(m => m.id === payload.id).mark = payload.rating;
			}
		}
	},
	actions: {
		allMovies (context) {
			Axios.get(url + '/movies/all')
				.then(response => {
					context.commit('allMovies', response.data)
				})
		},

		addMovie (context, movie) {
			return new Promise((resolve, reject) => {
				Axios.post(url + '/movies', movie)
					.then(response => {
						context.commit('addMovie');
					})
			});
		},
		deleteMovie (context, id) {
			return new Promise((resolve, reject) => {
				Axios.delete(url + '/movies/' + id )
					.then(response => {
						console.log(response);
						context.commit('removeMovie', id)
						resolve();
					})
			});
		},
		editMovie (context, id) {
			Axios.put(url + 'movies/:id', id)
				.then(response => {
					context.commit('editMovie', response.data)
				})
		},
		setRating(context, payload) {
			Axios.put(url + '/movies/' + payload.id + '/mark', { rating : payload.rating } )
				.then(response => {
					context.commit('setRating', payload);
				})
		}
	},
	getters : {
		getMovieById: (state) => (id) => {
			return state.movies.find(movie => movie.id === id);
		}
	}
});

