import Vue from 'vue'
// import App from './App.vue'
import App from './App' // webpack.config.js resolve 설정으로 생략가능
import router from '~/webapp/router/index.js'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
