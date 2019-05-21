import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import MyPage from './components/MyPage'
import Messages from './components/Messages'
import Friends from './components/Friends'
import Settings from './components/Settings'

import './sass/main.sass'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: MyPage,
	},
	{
		path: '/messages',
		component: Messages
	},
	{
		path: '/friends',
		component: Friends
	},
	{
		path: '/settings',
		component: Settings
	}
]

let router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
