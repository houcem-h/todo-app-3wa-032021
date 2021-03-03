import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../components/Contact.vue'
import Todos from "../views/Todos"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/todos', component: Todos }
]

const router = new VueRouter({
  routes
})

export default router
