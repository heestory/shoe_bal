import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dash from '@/components/AdminDash'
import About from '@/components/AdminAbout'
import Register from '@/components/AdminRegister'
import List from '@/components/AdminList'
import Brand from '@/components/AdminBrand'
import BootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'


Vue.use(VueAxios, axios)
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
        {path:'/list', component:List},
        {path:'/brand', component:Brand}
      ]
    }
  ]
})
