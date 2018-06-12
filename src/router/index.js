import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dash from '@/components/AdminDash'
import About from '@/components/AdminAbout'
import Register from '@/components/AdminRegister'
import List from '@/components/AdminList'
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
      component : Dash,
      children:[
        {path:'', component:About},
        {path:'/register', component:Register},
        {path:'/list', component:List}
      ]
    }
  ]
})
