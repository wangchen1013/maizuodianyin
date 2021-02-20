import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
import filmRouter from '@/router/routes/film.js'
import center from '@/router/routes/center.js'
import cinema from '@/router/routes/cinema.js'
const routes = [
  filmRouter,
  cinema,
  center,
  {
    path: '/',
    redirect:'film'
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
