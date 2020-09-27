import { createApp, version } from 'vue'
import App from './App.vue'
import './index.css'


console.log(version)
const app = createApp(App)

app.mount('#app')
