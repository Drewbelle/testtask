import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/router'
import store from './store/store'
import './assets/styles/style.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        }
      },
    components,
    directives,
})

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vuex)
app.use(vuetify, {
    iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
app.mount('#app')
