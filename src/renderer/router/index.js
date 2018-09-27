import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/',
      name: 'line-textarea',
      component: require('@/components/LineTextArea').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
