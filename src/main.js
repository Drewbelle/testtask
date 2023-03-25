import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/router'
import store from './store/store'
import './assets/styles/style.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vuex)
app.mount('#app')
