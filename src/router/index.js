import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import donars from '@/components/Donars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'donars',
      component: donars
    }
  ]
})
