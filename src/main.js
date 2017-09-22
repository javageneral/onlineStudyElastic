// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import vueResource from 'vue-resource'
import Axios from 'axios'

// import '../static/validate'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(vueResource)
Axios.defaults.withCredentials = true
Vue.prototype.$axios=Axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h => h(App)
})
