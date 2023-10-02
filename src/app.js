import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue';
import Category from './components/Category.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/category/:id', component: Category }
]

const router = new VueRouter({
	routes
})

new Vue({
	router,
	el: '#app',
	render: h => h(App)
});