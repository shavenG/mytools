import Vue from 'vue'
import axios from 'axios'

import './assets/styles/theme.scss';
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

Vue.use(ElementUI)
Vue.use(VueCodemirror)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false



Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
