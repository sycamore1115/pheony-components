import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

const routes = [
  {
    path:'',
    redirect:'timeSelect',
  },
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
