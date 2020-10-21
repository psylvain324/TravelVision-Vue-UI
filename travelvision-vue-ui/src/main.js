import Vue from 'vue'
import App from './App.vue'
import VueUi from '@vue/ui'

Vue.use(VueUi)

new Vue({
  el: '#app',
  render: h => h(App)
})
