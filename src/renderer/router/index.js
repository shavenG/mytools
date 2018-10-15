import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'index' },
      component: require('@/views/main').default,
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('../views/tools/index.vue')
        },{
          path: 'js',
          name: 'js',
          component: () => import('../views/tools/javascript')
        }, {
          path: 'json',
          name: 'json',
          component: () => import('../views/tools/json')
        },{
          path: 'sql',
          name: 'sql',
          component: () => import('../views/tools/sql')
        },{
          path: 'html',
          name: 'html',
          component: () => import('../views/tools/html')
        },{
          path: 'css',
          name: 'css',
          component: () => import('../views/tools/css')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
