/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
<<<<<<< HEAD
 */
import Vue from 'vue' //librairie "vue" dans node_modules
import app from './app.vue' //fichier app.vue local
import VueRouter from 'vue-router'
import Item from './components/movieitem.vue'

Vue.use(VueRouter);
Vue.component('movie-item', Item);

new Vue({
	el: '#app',
	render: h => h(app)
});

Vue.config.devtools = true;

