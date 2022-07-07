import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@/assets/styles/main.scss'

library.add(fas, fab)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
