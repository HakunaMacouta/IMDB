/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */
//Stylesheets
import 'bulma/bulma.sass'
import '../static/scss/all.scss'

//Vue
import Vue from 'vue'
import VueRouter from 'vue-router';
import { router } from './routes';
import { movieStore } from './store';

import app from '../vue/app.vue'

// Components
import movieItem from '../vue/components/thumbnail.vue';
import navbar from '../vue/components/navbar';
Vue.component('movie-thumbnail', movieItem);
Vue.component('navbar', navbar);

// Options
Vue.options.devtools = true;
Vue.use(VueRouter);

new Vue({
	el: '#app',
	store : movieStore,
	router,
	render: h => h(app)
});

