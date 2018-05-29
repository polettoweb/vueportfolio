import Vue from 'vue'
import Router from 'vue-router'
import VueScrollMonitor from 'vue-scrollmonitor' 
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'
import Contacts from '@/components/Contacts'
import Workshop from '@/components/Workshop'

Vue.use(Router)
Vue.use(VueScrollMonitor)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/workshop',
      name: 'Workshop',
      component: Workshop
    }
  ],
  mode: 'history'
})
