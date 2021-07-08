import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Importaciones de Vue-Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// En el createApp igual debemos adjuntar con el método use, lo de axios y VueAxios
createApp(App).use(router).use(VueAxios, axios).mount('#app')
