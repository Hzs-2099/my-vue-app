import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import App from './App.vue'
import router from './router'
import{ createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const app = createApp(App)
const pinia = createPinia().use(piniaPluginPersist)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')