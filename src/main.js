import './assets/main.css'
import store from './store';

import { createApp } from 'vue'
import App from './App.vue'
import vuex from 'vuex';

const app = createApp(App)

app.use(vuex)
app.use(store)

app.mount('#app')