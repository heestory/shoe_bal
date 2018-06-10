import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dash from '@/components/AdminDash'
import BootstrapVue from 'bootstrap-vue'


Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [

    {
      path:'/',
      name : 'Index',
      component : Index
    },
    {
      path:'/dash',
      name : 'Dash',
      component : Dash
    }
  ]
})
