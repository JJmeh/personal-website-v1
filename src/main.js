import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// particlesJS('spotlight', 'particlesjs-config.json', function() {
//     console.log('callback - particles-js config loaded');
//   });

const app = createApp(App)

app.use(router)

app.mount('#app')
