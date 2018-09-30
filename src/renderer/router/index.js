import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: require('@/components/HomePage').default
    },
    {
      path: '/js',
      name: 'javascript-tool',
      component: require('@/components/JavaScriptTool').default
    },
    {
      path: '/json',
      name: 'json-tool',
      component: require('@/components/JsonTool').default
    },
    {
      path: '/sql',
      name: 'sql-tool',
      component: require('@/components/SqlTool').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
