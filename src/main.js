import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'

Vue.use(VueCompositionAPI)
Vue.use(ElementUI)

const app = createApp({
  render: () => h(App)
})

app.mount('#app')
