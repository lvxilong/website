import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/views/home')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
