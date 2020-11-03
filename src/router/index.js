import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name:'timeSelect',
    path:'/timeSelect',
    component:()=>import('../views/timeSelectDemo')
  },
  {
    name:'colorDot',
    path:'/colorDot',
    component:()=>import('../views/colorDotDemo')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
