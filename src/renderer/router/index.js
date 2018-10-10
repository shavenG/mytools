import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'js' },
      component: require('@/views/main').default,
      children: [
        {
          path: 'js',
          name: 'js',
          component: () => import('@/components/JavaScriptTool')
        }, {
          path: 'json',
          name: 'json',
          component: () => import('@/components/JsonTool')
        }
      ]
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
