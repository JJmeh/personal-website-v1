import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Particles from 'vue3-particles'

// particlesJS('spotlight', 'particlesjs-config.json', function() {
//     console.log('callback - particles-js config loaded');
//   });

const app = createApp(App).use(Particles)

app.use(router)

app.mount('#app')
